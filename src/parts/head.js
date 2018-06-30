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
  render() {
    return (
      <View style={styles.container}>
      <View style={{width:width/2.3, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'white', fontSize:22}} > fejléc_ikon </Text>
      </View>
      <View style={{height:height/9, width:width/2.3, backgroundColor:"#74B9FF", borderTopRightRadius:10, borderTopLeftRadius:10}}>
        <Image
          source={require('../images/logo.png')}
          style={{height:height/9, width:width/2.3}}
          resizeMode = 'cover'
        />
      </View>
      </View>
    );
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
