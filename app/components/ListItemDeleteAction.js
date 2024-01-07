import React from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteAction(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
