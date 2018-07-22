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
            backgroundColor: "#1A86E0",
            paddingBottom: 0,
            borderRadius: 10,
            flex: 1,
            height: height,
            width: width,
            flexDirection: "column"
          }}
        >
          <Head scene="game"/>
  
          <View style={{ flex: 1, justifyContent:'center', margin:20}}>
         
         <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems:'center',
                marginTop: 10,

              }}
            >
             <Text
                    style={{
                      color: "white",
                      fontSize: height/40,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginRight: 10
                    }}
                  >
                    {"Figyeld meg!"}
                  </Text>
              <TouchableOpacity
                
                onPressIn={() => {
                  this.setState({ makerPress: true });
                }}
                onPressOut={() => {
                  this.setState({ makerPress: false });
                  //Actions.gameOf();
                }}
              >

             
                
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.2, height: width / 2.2 , justifyContent:'center', alignItems:'center', borderRadius:20}}
                  source={require("../src/images/megfigyeles.png")}
                />

                
               
              </TouchableOpacity>
              </View>

            <View
              style={{
                flexDirection: "row",
                top: -height/20,
                alignItems:'center',

              }}
            >
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
                  style={{ width: width / 2.2, height: width / 2.2 , justifyContent:'center', alignItems:'center', borderRadius:20}}
                  source={this.whatImage()}
                />
                

              </TouchableOpacity>
              <Text
                    style={{
                      color: "white",
                      fontSize: height/40,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginLeft: 10
                    }}
                  >
                    {"Mi hiányzik?"}
                  </Text>
              </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems:'center',
                marginTop: 10,
                top:-height/10

              }}
            >
             <Text
                    style={{
                      color: "white",
                      fontSize: height/40,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginRight: 10
                    }}
                  >
                    {"Egyenruhák"}
                  </Text>
              <TouchableOpacity
                
                onPressIn={() => {
                  Actions.gameEgyenruhak();
                }}
                onPressOut={() => {
                  this.setState({ sosPress: false });
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.2, height: width / 2.2 }}
                  source={this.sosImage()}
                />
                

              </TouchableOpacity>
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
