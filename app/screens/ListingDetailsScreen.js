import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";
import Listitem from "../components/Listitem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/2019-10-21_03_scientist_lab_coats_1024x.webp")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Chemistry Lab Coat</AppText>
        <AppText style={styles.price}>₹200</AppText>
        <View style={styles.usercontainer}>
          <Listitem
            image={require("../assets/me.jpg")}
            title="Souradip Pal"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercontainer: {
    marginVertical: 40,
  },
});
