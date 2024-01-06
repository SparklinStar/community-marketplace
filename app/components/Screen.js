import React from "react";

import { StatusBar, StyleSheet, View } from "react-native";

function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
