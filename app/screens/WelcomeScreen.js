import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logotemp.png")} />
        <Text style={styles.text} numberOfLines={1}>
          Sell Your Unwanted Items!
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <AppButton title="Login" onPress={() => console.log("tapped")} />
      </View>
      <View style={styles.buttoncontainer}>
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // cross axis

    height: "100%",
  },
  buttoncontainer: {
    width: "100%",

    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    width: "100%",
    top: 70,
    alignItems: "center", // main axis
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 160,
    width: "100%",
    position: "absolute",
    textAlign: "center",
  },
});
export default WelcomeScreen;
