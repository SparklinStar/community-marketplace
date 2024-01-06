import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteicon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeicon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteicon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
