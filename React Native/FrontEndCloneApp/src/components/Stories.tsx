import React from "react";
import { View, StyleSheet } from "react-native";
import Story from "./Story";

const Stories: React.FC = () => {
  return (
    <View style={styles.main}>
      <Story image={require("../img/story0.png")} name={`story`} isYou={true} />
      <Story
        image={require("../img/story1.jpg")}
        name={`Michael\nJackson`}
        profilePic={require("../img/mj_profile_pic.jpg")}
      />
      <Story
        image={require("../img/story2.jpg")}
        name={`Albert\nEinstein`}
        profilePic={require("../img/ae_profile_pic.jpeg")}
      />
      <Story
        image={require("../img/story3.jpg")}
        name={`Brad\nPitt`}
        profilePic={require("../img/bp_profile_pic.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 12.5,
  },
});

export default Stories;
