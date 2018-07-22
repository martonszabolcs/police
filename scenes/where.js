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
  ListView,
  AsyncStorage
} from "react-native";
//import SplashScreen from 'react-native-splash-screen'

import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");

var jsonCivil = require('../src/data/civil.json');


export default class Where extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      data: jsonCivil.civil
    };
    this.dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});

  }

  componentDidMount() {
    console.log(jsonCivil)

  }

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
  makerImage() {
    if (this.state.makerPress) {
      return require("../src/images/buttons/maker_in.png");
    } else {
      return require("../src/images/buttons/maker.png");
    }
  }
  whatImage() {
    if (this.state.whatPress) {
      return require("../src/images/buttons/what_in.png");
    } else {
      return require("../src/images/buttons/what.png");
    }
  }
  sosImage() {
    if (this.state.sosPress) {
      return require("../src/images/buttons/sos_in.png");
    } else {
      return require("../src/images/buttons/sos.png");
    }
  }
  whereImage() {
    if (this.state.wherePress) {
      return require("../src/images/buttons/where_in.png");
    } else {
      return require("../src/images/buttons/where.png");
    }
  }
  gameImage() {
    if (this.state.gamePress) {
      return require("../src/images/buttons/game_in.png");
    } else {
      return require("../src/images/buttons/game.png");
    }
  }


  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#74B9FF",
            paddingBottom: 0,
            borderRadius: 10,
            flex: 1,
            height: height,
            width: width,
            flexDirection: "column"
          }}
        >
          <Head scene="where"/>
  
          <View style={{ flex: 1, justifyContent:'center'}}>
          <ScrollView style={{backgroundColor:'transparent'}}>
                <ListView
            dataSource={this.dataSource.cloneWithRows(this.state.data)}
            enableEmptySections={true}
            stickyHeaderIndices={[10]}
            initialListSize={0}
            contentContainerStyle={styles.list}
            scrollEnabled={true}
            pageSize={2}
            column={2}
            renderRow={ (rowData, sectionID, rowID, highlightRow)=> (
            <View numberOfLines={1} style={{backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
              <View style={{marginTop:10, alignItems:'center'}}>
              <TouchableOpacity onPress={() => {Actions.reszletesnezetWhere({ data: rowData})}}>
              <View style={{backgroundColor:"white", width:width-40, height:height/10, borderRadius:10, flexDirection:'row', alignItems:'center'}}>
              <Image
                  source={require("../src/images/social.png")}
                  style={{width:height/15, height:height/15, marginLeft:10, zIndex:100, borderRadius:10}}/>
                <Text numberOfLines={2} style={[styles.cim, {color:'#17776f', marginLeft:5, width:width/1.5, paddingTop:2, paddingBottom:2, textAlign:'center', fontSize:height/45}]}>
                  {rowData.Név}
                </Text>
              </View>
              </TouchableOpacity>

              </View>
              </View>
              )}>
          </ListView>
              <View style={{height:100}}/>

        </ScrollView> 
          </View>
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
    backgroundColor: "red",
    borderRadius:10,
    width: width / 3,
    justifyContent: "center",
    alignItems: "center"
  },
});
