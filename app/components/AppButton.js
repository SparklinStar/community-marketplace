import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.appbutton, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appbutton: {
    width: "90%",
    height: 70,
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 35,
  },
  text: {
    fontSize: 30,
    color: colors.white,
    textAlign: "center",
    padding: 10,
  },
});
export default AppButton;
