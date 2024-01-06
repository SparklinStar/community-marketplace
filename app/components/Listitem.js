import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
function Listitem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 12,
  },
  title: {
    fontWeight: "600",
  },
});

export default Listitem;
