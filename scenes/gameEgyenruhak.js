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

export default class Home extends Component {
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/Chile.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:2})}
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
                    {"Kanada"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1, tovabb:2})}
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
                    {"USA"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsojo:1, tovabb:2})}
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
                    {"Chile"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/Irak.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:3})}
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
                    {"Ausztria"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikjo:1, tovabb:3})}
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
                    {"Irak"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1, tovabb:3})}
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
                    {"India"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/Japan.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:4})}
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
                    {"USA"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikjo:1, tovabb:4})}
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
                    {"Japán"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1, tovabb:4})}
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
                    {"Magyarország"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/Kina.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({negyedikjo:1, tovabb:5})}
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
                    {"Kína"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:5})}
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
                    {"Ausztrália"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1, tovabb:5})}
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
                    {"Brazília"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/Olaszorszag.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:6})}
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
                    {"Szlovénia"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:6})}
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
                    {"Lengyelország"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikjo:1, tovabb:6})}
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
                    {"Olaszorszag"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/UK.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:7})}
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
                    {"Németország"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({orodikRossz:1, tovabb:7})}
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
                    {"Románia"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({hatodikjo:1, tovabb:7})}
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
                    {"Anglia"}
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
              <Image
                resizeMode="stretch"
                style={{
                  width: height / 3,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/Egyenruhak/USA.jpg")}
              />

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
                {"Melyik ország egyenruhája?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({hetedikjo:1, tovabb:'nincs', ertekeles:"mehet"})}
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
                    {"USA"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({orodikRossz:1, tovabb:'nincs', ertekeles:"mehet"})}
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
                    {"Örményország"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1, tovabb:'nincs', ertekeles:"mehet"})}
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
                    {"Új-Zéland"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.ertekeles == "mehet" ){
      var ertek = Number(this.state.elsojo)+Number(this.state.masodikjo)+Number(this.state.harmadikjo)+Number(this.state.negyedikjo)+Number(this.state.otodikjo)+Number(this.state.hatodikjo)+Number(this.state.hetedikjo)
      console.log(ertek)
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
