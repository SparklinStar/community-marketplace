import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
}
