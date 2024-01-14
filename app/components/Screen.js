import React from "react";

import { StatusBar, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
