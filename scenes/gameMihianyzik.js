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
import call from "react-native-phone-call";

const args = {
  number: "123456", // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
};

export default class GameEgyenruha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      tovabb:1,
      elsojo: "",
      elsoRossz:"",
      masodikjo: "",
      masodikRossz:"",
      harmadikjo:"",
      negyedikjo:"",
      otodikjo:"",
      hatodikjo:"",
      hetedikjo:"",
      ertekeles:""
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}


  game(){
    if (this.state.tovabb == 1){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a képet!"}
              
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/kesztyu1.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:2})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
            
          </View>)
    } 

    if (this.state.tovabb == 2){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a második képet!"}
              
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/kesztyu2.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:3})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
            
          </View>)
    } 


    if (this.state.tovabb == 3){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Mi hiányzott a második képről?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:4})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Kalap"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:4})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Golyó"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsojo:1, tovabb:4})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Kesztyű"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.tovabb == 4){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/kulcs1.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:5})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    } 
    if (this.state.tovabb == 5){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a második képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/kulcs2.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:6})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    } 
    if (this.state.tovabb == 6){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Mi hiányzott a második képről?"}

              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:7})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Kesztyű"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikjo:1, tovabb:7})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Kulcs"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:7})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Kalap"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.tovabb == 7){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/ora1.jpg")}
              />
            <TouchableOpacity
                onPress={() => this.setState({tovabb:8})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          
          </View>)
    }
    if (this.state.tovabb == 8){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a második képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/ora2.jpg")}
              />
            <TouchableOpacity
                onPress={() => this.setState({tovabb:9})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          
          </View>)
    }
     if (this.state.tovabb == 9){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Mi hiányzott a második képről?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:10})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Pénz"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikjo:1, tovabb:10})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Óra"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:10})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                   {"Kanál"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.tovabb == 10){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/penz1.jpg")}
              />

              <TouchableOpacity
                onPress={() => this.setState({tovabb:11})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>)
    }
    if (this.state.tovabb == 11){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a második képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/penz2.jpg")}
              />

              <TouchableOpacity
                onPress={() => this.setState({tovabb:12})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>)
    }
    if (this.state.tovabb == 12){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >

              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Mi hiányzott a második képről?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({negyedikjo:1, tovabb:13})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Pénz"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:13})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Pisztoly"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:13})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Bankkártya"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.tovabb == 13){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/toll1.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:14})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>)
    }
    if (this.state.tovabb == 14){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
            <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Figyeld meg a második képet!"}
              </Text>
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 2,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Hianyzik/toll2.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:15})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Megfigyeltem"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>)
    }
    if (this.state.tovabb == 15){
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >

              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Mi hiányzott a második képről?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:30, ertekeles:"mehet"})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Pénztárca"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:30, ertekeles:"mehet"})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                    {"Cipő"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikjo:1, tovabb:30, ertekeles:"mehet"})}
                underlayColor="hsla(360, 100%, 100%, 1.0)"
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: width - 50,
                    height: 40,
                    marginTop:10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: 0
                    }}
                  >
                                        {"Toll"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
     if (this.state.ertekeles == "mehet" ){
      var ertek = Number(this.state.elsojo)+Number(this.state.masodikjo)+Number(this.state.harmadikjo)+Number(this.state.negyedikjo)+Number(this.state.otodikjo)+Number(this.state.hatodikjo)+Number(this.state.hetedikjo)
      if (ertek == 5){
        return (
          <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: height/40,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Helyes válaszok száma:"}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: height/5,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"5/"}{ertek}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Nagyon jó! Gratulálunk!"}
              </Text>
            </View>
          </View>
          )
      }
      console.log(ertek)
      var hiba = ""
      if (this.state.elsojo == ""){
         hiba = "1, "
      }
      if (this.state.masodikjo == ""){
         hiba = hiba+"2, "
      }
      if (this.state.harmadikjo == ""){
         hiba = hiba+"3, "
      }
      if (this.state.negyedikjo == ""){
         hiba = hiba+"4, "
      }
      if (this.state.otodikjo == ""){
         hiba = hiba+"5 "
      }
      return(
        <View style={{ flex: 1 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: height / 20
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: height/40,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"Helyes válaszok száma:"}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: height/5,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: 10
                }}
              >
                {"5/"}{ertek}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  padding:10,
                  marginTop: 10
                }}
              >
                {"Ezeknél nem találtad el a helyes választ:\n "+ hiba+"számú kép. \n Próbáld meg újra, hátha ezeket is meg tudod oldani!"}
              </Text>
            </View>
          </View>)
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
          <Head scene="game" />

          {this.game()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    backgroundColor: "rgba(255, 0, 0, 0.8)"
  },

  modalContainer: {
    height: width / 2,
    borderRadius: 10,
    width: width / 1.5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalButton: {
    height: 40,
    backgroundColor: "red",
    borderRadius: 10,
    width: width / 3,
    justifyContent: "center",
    alignItems: "center"
  }
});
