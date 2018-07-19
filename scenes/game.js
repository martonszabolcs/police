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
  ImageBackground
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

  makerImage() {
    if (this.state.makerPress) {
      return require("../src/images/11.png");
    } else {
      return require("../src/images/1.png");
    }
  }
  whatImage() {
      return require("../src/images/helyszin.png");
  }
  sosImage() {
      return require("../src/images/egyenruha.png");
   
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
          <Head scene="game"/>
  
          <View style={{ flex: 1, justifyContent:'center'}}>
          <View style={{ marginTop: height/20, marginBottom:height/20, borderRadius:20, flex: 1, justifyContent:'space-around',
                backgroundColor:'white'
        }}>
          <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: height / 20,
              }}
            >
              <TouchableOpacity
                
                onPressIn={() => {
                  this.setState({ makerPress: true });
                }}
                onPressOut={() => {
                  this.setState({ makerPress: false });
                  Actions.gameOf();
                }}
              >
                
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.5, height: width / 2.5 , justifyContent:'center', alignItems:'center', borderRadius:20}}
                  source={require("../src/images/megfigyeles.png")}
                />

                <Text
                  style={{
                    color: "#1A86E0",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"Megfigyelés Játék"}
                </Text>
               
              </TouchableOpacity>

              <TouchableOpacity
                
                onPressIn={() => {
                  this.setState({ whatPress: true });
                }}
                onPressOut={() => {
                  this.setState({ whatPress: false });
                }}
              >
               
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.5, height: width / 2.5 , justifyContent:'center', alignItems:'center', borderRadius:20}}
                  source={this.whatImage()}
                />

                <Text
                  style={{
                    color: "#1A86E0",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"MI HIÁNYZIK?"}
                </Text>

              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems:'center',
                marginTop: 10,

              }}
            >
              <TouchableOpacity
                
                onPressIn={() => {
                  this.setState({ sosPress: true });
                }}
                onPressOut={() => {
                  this.setState({ sosPress: false });
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.5, height: width / 2.5 }}
                  source={this.sosImage()}
                />
                <Text
                  style={{
                    color: "#1A86E0",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"Nemzetiség"}
                </Text>

              </TouchableOpacity>
            </View>
            </View>
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
