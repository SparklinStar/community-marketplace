import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  return (
    <Screen>
      <AppTextInput placholder="Username" />
    </Screen>
  );
}
