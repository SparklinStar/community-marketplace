import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Listitem from "../components/Listitem";
import { StatusBar } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Souradip",
    description: "Decoding Life",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Baivab",
    description: "Building DevDotCom👷",
    image: require("../assets/baivab.jpg"),
  },
  {
    id: 3,
    title: "Subhadip",
    description: "I'm a Game Developer, I build games (disasters)",
    image: require("../assets/subh.jpg"),
  },
  {
    id: 4,
    title: "Subinoy",
    description: "Develops bugs, squashes features",
    image: require("../assets/subinoy.jpg"),
  },
  {
    id: 5,
    title: "Spandan",
    description: "(╯°□°)╯︵ ┻━┻",
    image: require("../assets/spandan.jpg"),
  },
  {
    id: 6,
    title: "Siddhartha",
    description: "..",
    image: require("../assets/sid.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // Call the server
  };
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
            onPress={() => console.log("helloe", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Baivab",
              description: "Building DevDotCom👷",
              image: require("../assets/baivab.jpg"),
            },
            {
              id: 3,
              title: "Subhadip",
              description: "I'm a Game Developer, I build games (disasters)",
              image: require("../assets/subh.jpg"),
            },
            {
              id: 4,
              title: "Subinoy",
              description: "Develops bugs, squashes features",
              image: require("../assets/subinoy.jpg"),
            },
            {
              id: 5,
              title: "Spandan",
              description: "(╯°□°)╯︵ ┻━┻",
              image: require("../assets/spandan.jpg"),
            },
            {
              id: 6,
              title: "Siddhartha",
              description: "..",
              image: require("../assets/sid.jpg"),
            },
          ]);
        }}
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
