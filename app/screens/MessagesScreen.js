import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Listitem from "../components/Listitem";
import { StatusBar } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "Souradip",
    description: "Decoding Life",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Souradip",
    description: "Hey there!",
    image: require("../assets/me.jpg"),
  },
  {
    id: 3,
    title: "Souradip",
    description: "Let's talk!",
    image: require("../assets/me.jpg"),
  },
  {
    id: 4,
    title: "Souradip",
    description: "Free?",
    image: require("../assets/me.jpg"),
  },
  {
    id: 5,
    title: "Souradip",
    description: "Call mee when possible!",
    image: require("../assets/me.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <Listitem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default MessagesScreen;
