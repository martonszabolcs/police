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
import Geocoder from "react-native-geocoder";
import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");
import SendSMS from 'react-native-sms'
import call from "react-native-phone-call";
var currentcity = ""
const args = {
  number: "112", // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentcity: "",
      interval: 0
    };
    this.gps();
    this.load();
  }

  load(){
    AsyncStorage.getItem("teloszam").then(result => {
      var results = JSON.parse(result);
      if (results != null) {
        console.log(results);
        this.setState({
          number1: results.number1,
          number2: results.number2,
          number3: results.number3,
        })
      }
      if (this.state.number1 == undefined){
      this.setState({number1: ""})
    }
    if (this.state.number2 == undefined){
      this.setState({number2: ""})
    }
    if (this.state.number3 == undefined){
      this.setState({number3: ""})
    }
  })
  }

  componentDidMount() {}

  gpsRender() {
    console.log("rerender");
    if (this.state.currentcity) {
      return (
       
        <View
          style={{
            height: 40,
            marginTop:5,
            marginLeft:5,
            marginRight:5,
            width: width-10,
            backgroundColor: "#0984E3",
            justifyContent: "center",
            borderRadius:10,
            position: "absolute",
            top: height / 9,
            alignItems: "center",
          }}
        >
         
          <Text numberOfLines={1} style={{ color: "white", textAlign:'center', width:width-30, fontSize: 14 }}>
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
        this.setState({

          lat: position.coords.latitude,
          lng: position.coords.longitude
        }) 
        console.log(current);
        console.log(this.state);

        Geocoder.geocodePosition(current)
          .then(res => {
            console.log(res)
            if (res[0].streetNumber != null){
                currentcity = res[0].countryCode + " " + res[0].postalCode + " " + res[0].locality + ", " + res[0].streetName + " " + res[0].streetNumber
            } else {
                currentcity = res[0].countryCode + " " + res[0].postalCode + " " + res[0].locality + ", " + res[0].streetName;

            }
            })
          .catch(err => console.log(err));
      },
      error => {console.log(error.message), this.gps()} ,
      { enableHighAccuracy: true, distanceFilter: 1, timeout: 1000 }
    );
  
      this._interval = setInterval(() => {
      if (currentcity != ""){
        clearInterval(this._interval)
        this.setState({
          currentcity:currentcity,
        })
      }
    },1)
  }

  componentWillMount() {}
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
      clearInterval(this._interval);

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
  componentWillReceiveProps(){
    this.gps();
    console.log("izé")
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
    console.log(this.state.number1)
    console.log(this.state.number2)
    console.log(this.state.number3)
    var long = this.state.lng;
    var lat = this.state.lat;
    
    var number1 = this.state.number1;
    var number2 = this.state.number2;
    var number3 = this.state.number3;

    if(number1 && number2 && number3){
      var data = [number1, number2, number3]
    } 
    if(number1 && number2 && number3 == ""){
      var data = [number1, number2]
    }
    if(number1 && number3 && number2 == ""){
      var data = [number1, number3]
    }
    if(number2 && number3 && number2 == ""){
      var data = [number2, number3]
    }

    if(number2 && number1 == "" && number3 == ""){
      var data = [number2]
    }
    if(number3 && number1 == "" && number2 == ""){
      var data = [number3]
    }
    if(number1 && number2 == "" && number3 == ""){
      var data = [number1]
    }



  SendSMS.send({
    body: 'A pozicióm:'+lat+"; "+long,
    recipients: data,
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
                style={{ width:width, height:width/7, justifyContent: "flex-start", paddingTop:20, paddingLeft:20 }}
              >
              <View
                style={{ marginLeft:20, justifyContent: "flex-start", marginBottom:5 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                >

        <Image
        resizeMode="stretch"
        style={{ width: width / 8, height: width / 8 }}
        source={require("../src/images/backCall.png")}/>
                </TouchableOpacity>
              </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  marginTop:height/20
                }}
              >
              <Image
            source={require("../src/images/telephone.png")}
            style={{
              height: width / 3.5,
              width: width / 3.5,
              marginTop: 0,
            }}
            resizeMode="stretch"
          />
                <View
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: 10,
                    backgroundColor:'transparent',
                    marginTop:height/20
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: height/25,
                      fontWeight:'bold',
                      textAlign: "center",
                      marginBottom:10
                    }}
                  >
                    {"Mikor hívd a 112-t?"}
                  </Text>
                  <View
                  style={{
                    backgroundColor:'transparent',
                    borderRadius:20,
                    width:width-40,
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: height/40,
                      textAlign: "left"
                    }}
                  >
                    {"Minden olyan esetben, amikor emberi élet forog kockán, vagy esélyét érzékeled annak, hogy baj lehet (balesetet látott, tűzesetet észlel, vagy például betörést feltételez). Mindig fontold meg, hogy indítasz-e hívást, ugyanakkor ne habozz, ha érzed, hogy szükséges! "}
                    
                  </Text>
                </View>
                </View>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-around',marginBottom:20, width:width-20}}>
              <TouchableOpacity
                  onPress={() => {
                    this.sms();
                    this.gps();
                  }}
                >
                  <View 
                    style={[styles.modalButton, { backgroundColor: "white", borderWidth:1, borderColor:"#D77179" }]}>
                  <Text style={{ color: "#D77179", textAlign:'center', fontSize:width/25 }}>{"Helyzetem küldése"}</Text>
                  </View>
                </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                    call(args).catch(console.log);
                  }}
                >
                  <View
                   style={[styles.modalButton, {}]}>
                    <Text style={{ color: "white", fontSize:width/25, }}>{"Segélyhívás"}</Text>
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
      <View style={{ backgroundColor: "black", flex: 1, alignItems:'center' }}>
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
                    marginTop: 2,
                    fontSize: height/50
                  }}
                >
                  {"HOL"}
                </Text>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 2,
                    fontSize: height/50
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
                    marginTop: 2,
                    fontSize: height/50
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
                    marginTop: 2,
                    fontSize: height/50
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
                    marginTop: 2,
                    fontSize: height/50
                  }}
                >
                  {"HOVÁ"}
                </Text>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 2,
                    fontSize: height/50
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
                    marginTop: 2,
                    fontSize: height/50
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
    backgroundColor: "rgba(193, 66, 66, 0.9)"
  },

  modalContainer: {
    height: height -50,
    borderRadius: 10,
    width: width-40,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalButton: {
    height: height/10,
    backgroundColor: "#D77179",
    borderRadius: 20,
    width: width /3,
    justifyContent: "center",
    alignItems: "center"
  }
});
