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
  AsyncStorage
} from "react-native";
//import SplashScreen from 'react-native-splash-screen'

import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");
import call from 'react-native-phone-call';

const args = {
  number: '123456', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}



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
          <Head scene="what"/>
  
          <View style={{ flex: 1, justifyContent:'center'}}>
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
