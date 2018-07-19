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

  makerImage() {
    if (this.state.makerPress) {
      return require("../src/images/11.png");
    } else {
      return require("../src/images/1.png");
    }
  }
  whatImage() {
    if (this.state.whatPress) {
      return require("../src/images/22.png");
    } else {
      return require("../src/images/2.png");
    }
  }
  sosImage() {
    if (this.state.sosPress) {
      return require("../src/images/33.png");
    } else {
      return require("../src/images/3.png");
    }
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

  game(){
    if (this.state.elsojo == ""){
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
                  width: width /1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek1.png")}
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
                {"Az idős úr milyen édességet fogyaszt? "}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1})}
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
                    {"fánkot"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsoRossz:1})}
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
                    {"perecet"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({elsojo:1})}
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
                    {"fagyit"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.masodikjo == "" && this.state.elsojo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek2.png")}
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
                {"A szélvihar milyen színű a tűzcsap a képen? "}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1})}
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
                    {"piros"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikjo:1})}
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
                    {"sárga"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({masodikRossz:1})}
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
                    {"kék"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.harmadikjo == "" && this.state.elsojo != "" && this.state.masodikjo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek3.png")}
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
                {"A kávézó című képen hol található az esernyő?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({harmadikRossz:1})}
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
                onPress={() => this.setState({harmadikjo:1})}
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
                onPress={() => this.setState({harmadikRossz:1})}
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
    if (this.state.negyedikjo == "" && this.state.elsojo != "" && this.state.masodikjo != "" && this.state.harmadikjo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek4.png")}
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
                {"Az utcazene képen mit reklámoz a zenészek mögött lévő plakát?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1})}
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
                    {"digitális kamerát"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikjo:1})}
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
                    {"laptopot"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({negyedikRossz:1})}
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
                    {"kávéfőzőt"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.otodikjo == "" && this.state.elsojo != "" && this.state.masodikjo != "" && this.state.harmadikjo != ""&& this.state.negyedikjo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek5.png")}
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
                {"A nagyváros képen milyen gyorsétterem logója látható?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1})}
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
                onPress={() => this.setState({otodikRossz:1})}
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
                onPress={() => this.setState({otodikjo:1})}
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
    if (this.state.hatodikjo == "" && this.state.elsojo != "" && this.state.masodikjo != "" && this.state.harmadikjo != ""&& this.state.negyedikjo != ""&& this.state.otodikjo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek6.png")}
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
                {"A városnéző busz milyen cipőt reklámoz?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1})}
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
                onPress={() => this.setState({orodikRossz:1})}
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
                onPress={() => this.setState({hatodikjo:1})}
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
    if (this.state.hetedikjo == "" && this.state.elsojo != "" && this.state.masodikjo != "" && this.state.harmadikjo != ""&& this.state.negyedikjo != ""&& this.state.otodikjo != ""&& this.state.harmadikjo != ""){
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
                  width: width/1.4,
                  height: height / 3,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/jatek7.png")}
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
                {"Hány kislegényen van baseball-sapka?"}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
              <TouchableOpacity
                onPress={() => this.setState({hetedikjo:1, ertekeles:"mehet"})}
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
                    {"kettőn"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({orodikRossz:1})}
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
                    {"egyen"}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({otodikRossz:1})}
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
                    {"hármon"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>)
    }
    if (this.state.ertekeles == "mehet" ){
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
                  width: width-40,
                  height: height / 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                source={require("../src/images/megfigyeles.png")}
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
                {"Játék vége!"}
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
