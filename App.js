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
import home from "./scenes/home";

export default class Flux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <StatusBar hidden={false} transparent={true} />

        <Router>
          <Scene key="root" hideNavBar={true} duration={0}>
            <Scene
              key="home"
              component={home}
              title="home"
              initial={true}
              onRight={() => {
                Actions.hozzataplalas();
              }}
              rightTitle="hozzataplalas"
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
