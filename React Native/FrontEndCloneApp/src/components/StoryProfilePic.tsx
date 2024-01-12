import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";
import { StoryPresentCircle } from "./icons";
import { COLORS } from "../utils/colors";

interface Props {
  profilePic?: ImageSourcePropType;
}

const StoryProfilePic: React.FC<Props> = ({ profilePic }) => {
  return (
    <TouchableOpacity style={styles.main}>
      <View style={styles.storyPresentCircle}>
        <StoryPresentCircle color={COLORS.fbBlue} width={44} height={44} />
        {profilePic ? (
          <Image source={profilePic} style={styles.profilePic} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    //flex: 1,
  },
  profilePic: {
    width: 33,
    height: 33,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
  },
  storyPresentCircle: {
    width: 44,
    marginTop: 7,
    marginLeft: 6,
    justifyContent: "center",
  },
});

export default StoryProfilePic;
