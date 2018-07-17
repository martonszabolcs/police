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
  AsyncStorage
} from "react-native";
import Geocoder from "react-native-geocoder";
import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");
import SendSMS from 'react-native-sms'
import call from "react-native-phone-call";
var currentcity = ""
const args = {
  number: "123456", // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentcity: ""
    };
    this.gps();
  }

  componentDidMount() {}

  gpsRender() {
    console.log("rerender");
    if (this.state.currentcity) {
      return (
        <View
          style={{
            height: 30,
            width: width,
            backgroundColor: "blue",
            justifyContent: "center",
            position: "absolute",
            top: height / 9,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 14 }}>
            {this.state.currentcity}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>{" közelében"}</Text>
        </View>
      );
    }
  }

  gps() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        var current = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(current);

        Geocoder.geocodePosition(current)
          .then(res => {
                currentcity = res[0].formattedAddress
            })
          .catch(err => console.log(err));
      },
      error => {console.log(error.message),this.gps()} ,
      { enableHighAccuracy: true, distanceFilter: 1, timeout: 1000 }
    );
    setInterval(() => {
      if (currentcity != ""){
        this.setState({
          currentcity:currentcity
        })
      }
    },3000)
  }

  componentWillMount() {}
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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
  makerImage() {
    if (this.state.makerPress) {
      return require("../src/images/buttons/maker_in.png");
    } else {
      return require("../src/images/buttons/maker.png");
    }
  }
  whatImage() {
    if (this.state.whatPress) {
      return require("../src/images/buttons/what_in.png");
    } else {
      return require("../src/images/buttons/what.png");
    }
  }
  sosImage() {
    if (this.state.sosPress) {
      return require("../src/images/buttons/sos_in.png");
    } else {
      return require("../src/images/buttons/sos.png");
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

  sms(){

  SendSMS.send({
    body: 'The default body of the SMS!',
    recipients: ['0123456789', '9876543210'],
    successTypes: ['sent', 'queued']
  }, (completed, cancelled, error) => {

    console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  });
  }

  sosModal() {
    return (
      <View style={{ marginTop: 0 }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: 10
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      textAlign: "center"
                    }}
                  >
                    {"Mikor hívja a 112-t? Minden olyan esetben, amikor emberi élet forog kockán, vagy esélyét érzékeli annak, hogy baj lehet (balesetet látott, tűzesetet észlel, vagy például betörést feltételez). Mindig fontolja meg, hogy indít-e hívást, ugyanakkor ne habozzon, ha érzi, hogy szükséges! "}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >
                  <View
                    style={[styles.modalButton, { backgroundColor: "white" }]}
                  >
                    <Text style={{ color: "black", fontSize:20 }}>{"Mégse"}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.sms(),
                    call(args).catch(console.log);
                  }}
                >
                  <View style={styles.modalButton}>
                    <Text style={{ color: "white", fontSize:width/18 }}>{"Segélyhívás!"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    console.log(this.state.currentcity);
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
          {this.sosModal()}
          <Head scene="home" />
          <Image
            source={require("../src/images/police_felirat.png")}
            style={{
              height: height * 0.8,
              width: width / 8,
              position: "absolute",
              left: 0,
              marginTop: 10,
              top: height / 8
            }}
            resizeMode="stretch"
          />
          {this.gpsRender()}
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: height / 20
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                  this.setState({ makerPress: true });
                }}
                onPressOut={() => {
                  this.setState({ makerPress: false });
                  Actions.marker();
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 3.2, height: width / 3.2 }}
                  source={this.makerImage()}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"HOL"}
                </Text>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"TALÁLHATÓ?"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                  this.setState({ whatPress: true });
                }}
                onPressOut={() => {
                  this.setState({ whatPress: false });
                  Actions.what();
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 3.2, height: width / 3.2 }}
                  source={this.whatImage()}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"MI TÖRTÉNT?"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                  this.setState({ sosPress: true });
                }}
                onPressOut={() => {
                  this.setState({ sosPress: false, modalVisible: true });
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 3.2, height: width / 3.2 }}
                  source={this.sosImage()}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"SEGÉLYHÍVÁS"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 10
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                  this.setState({ wherePress: true });
                }}
                onPressOut={() => {
                  this.setState({ wherePress: false });
                  Actions.where();
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 3.2, height: width / 3.2 }}
                  source={this.whereImage()}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"HOVÁ"}
                </Text>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"FORDULHATOK?"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                  this.setState({ gamePress: true });
                }}
                onPressOut={() => {
                  this.setState({ gamePress: false });
                  Actions.game();
                }}
              >
                <Image
                  resizeMode="stretch"
                  style={{ width: width / 3.2, height: width / 3.2 }}
                  source={this.gameImage()}
                />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 0
                  }}
                >
                  {"JÁTÉK"}
                </Text>
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
    borderRadius: 10,
    flex: 1,
    backgroundColor: "rgba(255, 0, 0, 0.8)"
  },

  modalContainer: {
    height: height -50,
    borderRadius: 10,
    width: width-50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalButton: {
    height: height/5,
    backgroundColor: "red",
    borderRadius: 10,
    width: width /2-25,
    justifyContent: "center",
    alignItems: "center"
  }
});
