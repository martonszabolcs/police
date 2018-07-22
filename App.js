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

import { Router, Scene, Actions } from "react-native-router-flux";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import home from "./scenes/home";
import what from "./scenes/what";
import where from "./scenes/where";
import game from "./scenes/game";
import marker from "./scenes/marker";
import gameOf from "./scenes/gameOf";
import settings from "./scenes/settings";
import reszletesnezet from "./scenes/reszletesnezet";
import reszletesnezetWhere from "./scenes/reszletesnezetWhere";
import reszletesnezetWhat from "./scenes/reszletesnezetWhat";
import reszletesnezetNagykovet from "./scenes/reszletesnezetNagykovet";
import gameEgyenruhak from "./scenes/gameEgyenruhak";



export default class Flux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.firstTime();
  }

  componentDidMount() {
    Actions.reset("home");
    /*if (Platform.OS === "android") {
      SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 500
      });
    }*/
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }
  firstTime() {
    AsyncStorage.getItem("this.props.pagekey", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result == null) {
          Actions.settings();
        }
      }
      AsyncStorage.setItem(
        "this.props.pagekey",
        JSON.stringify({ value: "true" }),
        (err, result) => {}
      );
    });
  }

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

  ios(){
    var stat = getStatusBarHeight(true);
      return (<View style={{height:stat, backgroundColor:'black'}}/>)
    } 

  render() {
    var { height, width } = Dimensions.get("window");

    return (

      <View
        style={{
          backgroundColor: "#5ecac5",
          paddingBottom: 0,
          borderRadius:10,
          flex: 1,
          flexDirection: "column"
        }}
      >
      {this.ios()}
        <StatusBar barStyle="light-content" hidden={false} transparent={true} />

        <Router>
          <Scene key="root" hideNavBar={true} duration={0}>
            <Scene
              key="home"
              component={home}
              title="home"
              initial={true}
              onRight={() => {
              }}
            />
            <Scene
              key="what"
              component={what}
              title="what"
              onRight={() => {
              }}
            />
            <Scene
              key="gameOf"
              component={gameOf}
              title="gameOf"
              onRight={() => {
              }}
            />
            <Scene
              key="reszletesnezetWhat"
              component={reszletesnezetWhat}
              title="reszletesnezetWhat"
              onRight={() => {
              }}
            />
            <Scene
              key="reszletesnezetNagykovet"
              component={reszletesnezetNagykovet}
              title="reszletesnezetNagykovet"
              onRight={() => {
              }}
            />
            <Scene
              key="settings"
              component={settings}
              title="settings"
              onRight={() => {
              }}
            />
            <Scene
              key="reszletesnezet"
              component={reszletesnezet}
              title="reszletesnezet"
              onRight={() => {
              }}
            />
            <Scene
              key="reszletesnezetWhere"
              component={reszletesnezetWhere}
              title="reszletesnezetWhere"
              onRight={() => {
              }}
            />
            <Scene
              key="where"
              component={where}
              title="where"
              onRight={() => {
              }}
            />
            <Scene
              key="game"
              component={game}
              title="game"
              onRight={() => {
              }}
            />
            <Scene
              key="marker"
              component={marker}
              title="marker"
              onRight={() => {
              }}
            />
            <Scene
              key="gameEgyenruhak"
              component={gameEgyenruhak}
              title="gameEgyenruhak"
              onRight={() => {
              }}
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
