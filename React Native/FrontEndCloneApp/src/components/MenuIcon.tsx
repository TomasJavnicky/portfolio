import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";
import { StoryPresentCircle } from "./icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const MenuIcon: React.FC = () => {
  const profilePic = require("../img/profile_pic.jpeg");
  return (
    <View style={styles.main}>
      <View style={styles.storyPresentCircle}>
        <StoryPresentCircle
          color={COLORS.feedUserIcons}
          width={32}
          height={32}
        />
        <Image source={profilePic} style={styles.profilePic} />
      </View>
      <View style={styles.littleMenuView}>
        <View />
        <View style={styles.littleMenuIcon}>
          <SimpleLineIcons name="menu" size={6} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  storyPresentCircle: {
    //width: 44,
    justifyContent: "center",
    alignSelf: "center",
  },
  profilePic: {
    width: 27,
    height: 27,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
  },
  littleMenuView: {
    height: "100%",
    width: 14,
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  littleMenuIcon: {
    width: 14,
    height: 14,
    backgroundColor: COLORS.feedUserIcons,
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuIcon;
