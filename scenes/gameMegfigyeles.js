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
                source={require("../src/images/Megfigyeles/Fagyi.jpg")}
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
                {"Az idős úr milyen édességet fogyaszt? "}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:3})}
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
                    {"Fánkot"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:3})}
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
                    {"Perecet"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsojo:1, tovabb:3})}
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
                    {"Fagyit"}
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
                source={require("../src/images/Megfigyeles/Tuzcsap.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:4})}
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
                {"Milyen színű a tűzcsap a képen? "}

              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:5})}
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
                    {"Kék"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikjo:1, tovabb:5})}
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
                    {"Sárga"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:5})}
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
                    {"Zöld"}
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
                source={require("../src/images/Megfigyeles/Esernyo.jpg")}
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
                {"A képen hol található az esernyő?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:7})}
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
                    {"A szék támláján lóg"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikjo:1, tovabb:7})}
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
                    {"Az asztalon hever"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:7})}
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
                   {"A hölgy karján lóg"}
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
                source={require("../src/images/Megfigyeles/Laptop.jpg")}
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
    }if (this.state.tovabb == 8){
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
                {"Mit reklámoz a zenészek mögött lévő plakát?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({negyedikjo:1, tovabb:9})}
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
                    {"Laptopot"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:9})}
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
                    {"Digitális kamerát"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:9})}
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
                    {"Kávéfőzőt"}
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
                source={require("../src/images/Megfigyeles/McDonalds.jpg")}
              />
              <TouchableOpacity
                onPress={() => this.setState({tovabb:10})}
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
                {"A képen milyen gyorsétterem logója látható?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:11})}
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
                    {"Subway"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:11})}
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
                    {"Burger King"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikjo:1, tovabb:11})}
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
                                        {"McDonalds"}
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
                source={require("../src/images/Megfigyeles/Asics.jpg")}
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
               {"A városnéző busz milyen cipőt reklámoz?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({hatodikRossz:1, tovabb:13})}
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
                    {"Adidas"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({hatodikRossz:1, tovabb:13})}
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
                    {"Nike"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({hatodikjo:1, tovabb:13})}
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
                    {"Asics"}
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
                source={require("../src/images/Megfigyeles/Sapka.jpg")}
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
               {"Hány kislegényen van baseball-sapka?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({hetedikRossz:1, tovabb:30, ertekeles:"mehet"})}
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
                    {"Hármon"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({hetedikRossz:1, tovabb:30, ertekeles:"mehet"})}
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
                    {"Egyen"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({hetedikjo:1, tovabb:30, ertekeles:"mehet"})}
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
                    {"Kettőn"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
     if (this.state.ertekeles == "mehet" ){
      var ertek = Number(this.state.elsojo)+Number(this.state.masodikjo)+Number(this.state.harmadikjo)+Number(this.state.negyedikjo)+Number(this.state.otodikjo)+Number(this.state.hatodikjo)+Number(this.state.hetedikjo)
      if (ertek == 7){
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
                {"7/"}{ertek}
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
         hiba = hiba+"5, "
      }
      if (this.state.hatodikjo == ""){
         hiba = hiba+"6, "
      }
      if (this.state.hetedikjo == ""){
         hiba = hiba+"7 "
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
                {"7/"}{ertek}
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
