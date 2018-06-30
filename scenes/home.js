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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }
  
  componentWillUnmount() {
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
          flex: 1,
          height: height,
          width: width,
          flexDirection: "column",
          justifyContent:'center',
          alignItems:"center"
        }}
      >
      <Text> HELLÓ </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
