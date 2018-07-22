import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
  Modal,
  InteractionManager,
  ScrollView,
  Platform,
  BackHandler,
  Alert,
  AsyncStorage
} from "react-native";
//import SplashScreen from 'react-native-splash-screen'
var { height, width } = Dimensions.get("window");

import { Router, Scene, Actions } from "react-native-router-flux";

export default class Head extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      scene: this.props.scene
    };
  }
  componentWillMount(){
    console.log(this.state.scene)
    this.setState({
      scene: this.props.scene
    })
  }
  change(){
    if(this.state.scene == "home"){
      return(
        <Image
          source={require('../images/logo.png')}
          style={{height:height/9-10, width:width/2.3-10}}
          resizeMode = 'cover'
        />)
    }
    if(this.state.scene == "what"){
      return(
        <View style={{justifyContent:'center', alignItems:'center', height:height/9}}>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        MI
        </Text>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        TÖRTÉNT?
        </Text>
        </View>
        )
    }
    if(this.state.scene == "settings"){
      return(
        <View style={{justifyContent:'center', alignItems:'center', height:height/9}}>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        BEÁLLÍTÁSOK
        </Text>
        </View>
        )
    }
    if(this.state.scene == "where"){
      return(
        <View style={{justifyContent:'center', alignItems:'center', height:height/9}}>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        HOVÁ
        </Text>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        FORDULHATOK?
        </Text>
        </View>
        )
    }
    if(this.state.scene == "game"){
      return(
        <View style={{justifyContent:'center', alignItems:'center', height:height/9}}>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        JÁTÉK
        </Text>
        </View>
        )
    }
    if(this.state.scene == "marker"){
      return(
        <View style={{justifyContent:'center', alignItems:'center', height:height/9}}>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
         HOL
        </Text>
        <Text style={{color:'white', fontSize:height/40, fontWeight:"bold"}}>
        TALÁLHATÓ?
        </Text>
        </View>
        )
    }

  }

  pop(){
    if (this.state.scene == "home"){
      return(
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 500); Actions.settings(); })}>
      <View style={{width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'space-around'}}>

        <Image
        resizeMode="stretch"
        style={{ width: height / 20, height: height / 20 }}
        source={require("../../src/images/settings.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height / 10, height: height / 10, marginLeft:20}}
        source={require("../../src/images/police-car.png")}
      />
        </View>

      )}
       if (this.state.scene == "settings"){
      return(
        <View style={{width:width/1.8, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.home(); })}>
      <View style={{marginLeft:10, width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'center'}}>

        <Image
        resizeMode="stretch"
        style={{ width: width / 12, height: width / 12 }}
        source={require("../../src/images/back.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10, marginRight:20 }}
        source={require("../../src/images/police.png")}
      />
      <View style={{width:width/10, height:width/10}}/>
      </View>
      )}
      if (this.state.scene == "reszletes"){
      return(
        <View style={{width:width, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.pop(); })}>
      
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10 }}
        source={require("../../src/images/police.png")}
      />
      </View>
      )}
      if (this.state.scene == "reszletesWhere"){
      return(
        <View style={{width:width, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.pop(); })}>
      
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10 }}
        source={require("../../src/images/house.png")}
      />
      </View>
      )}

      if (this.state.scene == "marker"){
      return(
      <View style={{width:width/1.8, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.home(); })}>
      <View style={{marginLeft:10, width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'center'}}>

        <Image
        resizeMode="stretch"
        style={{ width: width / 12, height: width / 12 }}
        source={require("../../src/images/back.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10, marginRight:20 }}
        source={require("../../src/images/policeman.png")}
      />
      <View style={{width:width/10, height:width/10}}/>
      </View>

      )
    }
    if (this.state.scene == "where"){
      return(
      <View style={{width:width/1.8, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.home(); })}>
      <View style={{marginLeft:10, width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'center'}}>

        <Image
        resizeMode="stretch"
        style={{ width: width / 12, height: width / 12 }}
        source={require("../../src/images/back.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10, marginRight:20 }}
        source={require("../../src/images/boy.png")}
      />
      <View style={{width:width/10, height:width/10}}/>
      </View>

      )
    }
    if (this.state.scene == "what"){
      return(
      <View style={{width:width/1.8, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.home(); })}>
      <View style={{marginLeft:10, width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'center'}}>

        <Image
        resizeMode="stretch"
        style={{ width: width / 12, height: width / 12 }}
        source={require("../../src/images/back.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10, marginRight:20 }}
        source={require("../../src/images/what.png")}
      />
      <View style={{width:width/10, height:width/10}}/>
      </View>

      )
    }
    if (this.state.scene == "game"){
      return(
      <View style={{width:width/1.8, height:height/9, alignItems:'center', backgroundColor:"transparent", flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={(() => {setTimeout(()=> {Actions.refresh({refresh: true})}, 100); Actions.home(); })}>
      <View style={{marginLeft:10, width:width/5, height:height/9, backgroundColor:"#1A86E0", justifyContent:'center'}}>

        <Image
        resizeMode="stretch"
        style={{ width: width / 12, height: width / 12 }}
        source={require("../../src/images/back.png")}
      />
      </View>
      </TouchableOpacity>
      <Image
        resizeMode="stretch"
        style={{ width: height/10, height: height/10, marginRight:20 }}
        source={require("../../src/images/policeman.png")}
      />
      <View style={{width:width/10, height:width/10}}/>
      </View>

      )
    }
  }

  render() {
    if (this.state.scene == "reszletes" || this.state.scene == "reszletesWhere"){

    return (
      <View style={styles.container}>
      <View style={{width:width, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
        {this.pop()}
      </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
      <View style={{width:width/1.8, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
        {this.pop()}
      </View>
      <View style={{height:height/9, width:width/2.3, backgroundColor:"#74B9FF", borderTopRightRadius:10, borderTopLeftRadius:10}}>
        {this.change()}
      </View>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0984E3",
    paddingBottom: 0,
    height: height / 9,
    width: width,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
