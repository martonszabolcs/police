import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  InteractionManager,
  ScrollView,
  Platform,
  BackHandler,
  Alert,
  AsyncStorage,
  TextInput
} from "react-native";
//import SplashScreen from 'react-native-splash-screen'

import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");
import call from 'react-native-phone-call';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      infos: this.props.data,
      on:false
    };
    console.log(this.state.infos)
  this.load();
  }

  load(){
    AsyncStorage.getItem("teloszam").then(result => {
      var results = JSON.parse(result);
      if (results != null) {
        console.log(results);
        this.setState({
          number1: results.number1,
          number2: results.number2,
          number3: results.number3,
        })
      }
  })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  backPressed = () => {
    if (Actions.state.index != 0) {
      Actions.pop();
      return true;
    } else {
      Alert.alert(
        "Alkalmazás bezárása",
        "Biztosan bezárod az alkalmazást?",
        [
          {
            text: "Mégse",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Igen", onPress: () => BackHandler.exitApp() }
        ],
        { cancelable: false }
      );
      return true;
    }
  };

  //SplashScreen.hide();

  handleLogout() {
    console.log("User logged out");
  }

  mittegyek(){
    if (this.state.on){
      return(
        <View style={{width:width-40, backgroundColor:'white', borderBottomRightRadius:10, borderBottomLeftRadius:10, paddingBottom:20}}>

          <Text style={{ color: "black", paddingLeft:20, paddingRight:20, textAlign:'left', fontSize:width/25 }}>{this.state.infos.whatcanido}</Text>
        </View>

)

    }
  }
handleScroll = (event: Object) => {
    this.setState({scrollX: event.nativeEvent.contentOffset.x, scrollY: event.nativeEvent.contentOffset.y})
}

  


  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#1A86E0",
            paddingBottom: 0,
            borderRadius: 10,
            flex: 1,
            height: height,
            width: width,
            flexDirection: "column",
            justifyContent:'center', 
            alignItems:'center'
          }}
        >
          <Head scene="reszletes"/>
  
          <ScrollView ref={(scrollView) => { this._scrollView = scrollView; }}
  onScroll={this.handleScroll}>
          <View style={{ flex: 1, alignItems:'center'}}>

          <Text style={{ color: "white", fontWeight:'bold', padding:20, textAlign:'left', fontSize:width/15 }}>{this.state.infos.what}</Text>
          <Text style={{ color: "white", paddingLeft:20, paddingRight:20, textAlign:'left', fontSize:width/25 }}>{this.state.infos.desc}</Text>
          <TouchableOpacity
                  onPress={() => {
                    this.setState({on: true})
                    setTimeout(() => {
                        this._scrollView.scrollTo({y: this.state.scrollY + height/1.5});


                    },500)

                    }}
                >
                  <View 
                    style={[styles.modalButton, { backgroundColor: "white", marginBottom:0, borderBottomLeftRadius:0, borderBottomRightRadius:0, borderWidth:1, borderColor:"white", justifyContent:'center', alignItems:'center' }]}>
                  <Text style={{ color: "red", fontWeight:"bold", textAlign:'center', fontSize:width/25 }}>{"Mit tegyek?"}</Text>
                  </View>
                </TouchableOpacity>
          {this.mittegyek()}
          </View>
          </ScrollView>

           <TouchableOpacity
                  onPress={() => {
                    Actions.pop();
                  }}
                >
                  <View 
                    style={[styles.modalButton, { backgroundColor: "transparent", marginBottom:20, borderWidth:1, borderColor:"white", justifyContent:'center', alignItems:'center' }]}>
                  <Text style={{ color: "white", textAlign:'center', fontSize:width/25 }}>{"Vissza"}</Text>
                  </View>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    flex: 1,
    backgroundColor: "rgba(255, 0, 0, 0.8)"
  },

  modalContainer: {
    height: width / 2,
    borderRadius:10,
    width: width / 1.5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalButton: {
    height: 40,
    backgroundColor: "#AED69E",
    borderRadius:10,
    marginTop:20,
    width: width -40,
    justifyContent: "center",
    alignItems: "center"
  },
});
