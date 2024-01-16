import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Listitem from "../components/Listitem";
import Card from "../components/Card";

import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Chemistry Lab Coat",
    price: 100,
    image: require("../assets/labcoat.webp"),
  },
  {
    id: 2,
    title: "Graphics Lab Equiments",
    price: 500,
    image: require("../assets/graphicseq.webp"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.page}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"₹" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: colors.light },
});
export default ListingsScreen;
