import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { COLORS } from "../utils/colors";
import StoryProfilePic from "./StoryProfilePic";

interface Props {
  image: ImageSourcePropType;
  name: string;
  isYou?: boolean;
  profilePic?: ImageSourcePropType;
}

const Story: React.FC<Props> = ({ image, name, isYou, profilePic }) => {
  return (
    <TouchableOpacity>
      <View style={styles.main}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          {isYou ? <View /> : <StoryProfilePic profilePic={profilePic} />}
          <View>
            {isYou ? <Text style={styles.nameYou}>Create</Text> : null}
            <Text style={isYou ? styles.textYou : styles.textUsers}>
              {name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 184,
    width: 104,
    marginRight: 5.4,
    flexDirection: "row",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderColor: COLORS.storyBorder,
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "red",
  },
  textUsers: {
    color: "white",
    fontWeight: "600",
    marginLeft: 6.7,
    marginBottom: 7,
  },
  textYou: {
    color: "black",
    fontWeight: "600",
    marginBottom: 7,
    alignSelf: "center",
  },
  nameYou: {
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
  },
});

export default Story;
