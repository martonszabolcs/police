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
  TextInput,
  Linking
} from "react-native";
//import SplashScreen from 'react-native-splash-screen'

import { Router, Scene, Actions } from "react-native-router-flux";
import Head from "../src/parts/head";
var { height, width } = Dimensions.get("window");
import call from "react-native-phone-call";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.load();
  }

  load() {
    AsyncStorage.getItem("teloszam").then(result => {
      var results = JSON.parse(result);
      if (results != null) {
        console.log(results);
        this.setState({
          number1: results.number1,
          number2: results.number2,
          number3: results.number3
        });
      }
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

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

  async save() {
    console.log(this.state);
    var data = {
      number1: this.state.number1,
      number2: this.state.number2,
      number3: this.state.number3
    };
    console.log(data);
    AsyncStorage.setItem("teloszam", JSON.stringify(data));
    Actions.home();
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Head scene="settings" />
          <ScrollView>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  padding: 3,
                    marginTop: 20,
                  textAlign: "left",
                  fontSize: width / 20
                }}
              >
                {
                  "Az alkalmazásról"
                }
              </Text>
              <Text
                style={{
                  color: "white",
                  padding: 20,
                  textAlign: "left",
                  fontSize: width / 25
                }}
              >
                {
                  "Az „Ő pont segíthet” mobilalkalmazás gyors és hatékony segítséget nyújt abban az esetben, ha bajba kerülnél. Tájékoztatást ad a helyi rendőrkapitányságok, illetve a külföldi nagykövetségek elérhetőségeiről, valamint az „SOS” gomb megnyomásával azonnali segélyhívásra ad lehetőséget. A segítségkérés törtéhet a 112 segélyhívó tárcsázásásával vagy SMS-ben az aktuális tartózkodási helyed elküldésével. \n \n Itt add meg azoknak a telefonszámát, akiknek el szeretnéd majd küldeni a segélykérő üzeneted!"
                }
              </Text>

              <TextInput
                ref="FirstInput"
                returnKeyType="next"
                blurOnSubmit
                placeholder="Első telefonszám"
                autoCapitalize="none"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 20,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 20,
                  width: width - 40,
                  height: 60
                }}
                onChangeText={number1 => this.setState({ number1 })}
                value={this.state.number1}
              />
              <TextInput
                ref="FirstInput"
                returnKeyType="next"
                blurOnSubmit
                placeholder="Második telefonszám"
                autoCapitalize="none"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 20,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 20,
                  width: width - 40,
                  height: 60
                }}
                onChangeText={number2 => this.setState({ number2 })}
                value={this.state.number2}
              />
              <TextInput
                ref="FirstInput"
                returnKeyType="next"
                blurOnSubmit
                placeholder="Harmadik telefonszám"
                autoCapitalize="none"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  marginTop: 20,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 20,
                  width: width - 40,
                  height: 60
                }}
                onChangeText={number3 => this.setState({ number3 })}
                value={this.state.number3}
              />
              <TouchableOpacity
                onPress={() => {
                  this.save();
                }}
              >
                <View
                  style={[
                    styles.modalButton,
                    {
                      backgroundColor: "transparent",
                      marginTop: 20,
                      borderWidth: 1,
                      borderColor: "white",
                      justifyContent: "center",
                      alignItems: "center"
                    }
                  ]}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: width / 25
                    }}
                  >
                    {"Mentés"}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  margin: 10,
                  marginTop: 20,
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 20
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "left",
                    fontSize: width / 25
                  }}
                >
                  {
                    "A helymeghatározás engedélyezésével automatikusan semmilyen adatot nem továbbít az alkalmazás, a felhasználó saját információként kezeli."
                  }
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "left",
                    padding:20, 
                    fontSize: width / 25,
                  }}
                >
                  {"Vegyél részt az alkalmazás fejlesztésében és küldd el nekünk az észrevételeidet, javaslataidat!"}
                </Text>
            </View> 
            <View style={{justifyContent:'center', alignItems:'center'}}> 
             <TouchableOpacity
                onPress={() => {
                  var url = "bunmeg.brfk@budapest.police.hu";
                  Linking.openURL('mailto:bunmeg.brfk@budapest.police.hu')

                }}
              >
            <View style={{ justifyContent: "center", alignItems: "center", width:width-40, height:width/10, borderRadius:10, backgroundColor:"transparent", borderWidth:1, borderColor:"white" }}>
             
                <Text
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: width / 25,
                  }}
                >
                  {"bunmeg.brfk@budapest.police.hu"}
                </Text>
            </View>
              </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  var url = "http://www.police.hu/hu/info/jogi-nyilatkozat";
                  Linking.openURL(url).catch(err =>
                    console.log("An error occurred", err)
                  );
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: width / 25,
                    marginBottom: 20,
                    marginTop: 20
                  }}
                >
                  {"Adatvédelmi nyilatkozat"}
                </Text>
              </TouchableOpacity>
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
    width: width - 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
