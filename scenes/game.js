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
  ImageBackground,
  Linking
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

  linking(){
    if (Platform.OS == "android"){
      Linking.openURL("https://play.google.com/store/apps/details?id=com.attrecto.nbt&hl=hu").catch(err => console.error('An error occurred', err));

    } else {
      Linking.openURL("https://itunes.apple.com/hu/app/h%C3%A1z%C5%91rz%C5%91/id1172215929?mt=8").catch(err => console.error('An error occurred', err));

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
         <ScrollView>
  
          <View style={{ flex: 1, justifyContent:'center', marginLeft:20, marginRight:20, marginBottom:20, paddingTop:20}}>
         
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
                  Actions.gameMegfigyeles();
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
                  Actions.gameMihianyzik();
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
                onPress={() => {
                  this.setState({ sosPress: false });
                  Actions.gameEgyenruhak();

                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.2, height: width / 2.2 }}
                  source={this.sosImage()}
                />
                

              </TouchableOpacity>
            </View>
             <View
              style={{
                flexDirection: "column",
                top: -height/20,
                backgroundColor:'#74B9FF',
                borderRadius:10,
                padding:20,
                alignItems:'center',

              }}
            >
              <TouchableOpacity
                style={{
                flexDirection: "column",
                  backgroundColor:'#74B9FF',
                alignItems:'center',

              }}
                onPress={() => {
                  this.linking();
                }}
                
              >
               
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 2.2, height: width / 2.2 , justifyContent:'center', alignItems:'center', borderRadius:20}}
                  source={require('../src/images/hazorzo.png')}
                />
                

              <Text
                    style={{
                      color: "white",
                      fontSize: height/40,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginLeft: 10
                    }}
                  >
                    {"Hasonlóan izgalmas bűnmegelőzési játék letöltéséhez kattints ide"}
                  </Text>
              </TouchableOpacity>

              </View>
            </View>
              </ScrollView>
            
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
