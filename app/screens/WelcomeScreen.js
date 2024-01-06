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
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
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
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center", // main axis
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
