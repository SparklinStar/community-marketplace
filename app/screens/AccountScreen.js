import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/Listitem";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}></View>
      <ListItem
        title="Mosh Hamedani"
        subTitle="souradip1000@gmail.com"
        image={require("../assets/me.jpg")}
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
});

export default AccountScreen;
