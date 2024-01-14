import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";
import ListItemDeleteAction from "./ListItemDeleteAction";
import Icon from "./Icon";

function Listitem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    allignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 12,
  },
  title: {
    paddingTop: 7,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default Listitem;
