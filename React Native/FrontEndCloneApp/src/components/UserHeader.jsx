import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import StoryProfilePic from "./StoryProfilePic";
import { Dots } from "./icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import { PublicPost } from "./icons";

export default UserHeader = () => {
  return (
    <View style={styles.main}>
      <View style={styles.userInfo}>
        <StoryProfilePic profilePic={require("../img/ae_profile_pic.jpeg")} />
        <View style={styles.textPart}>
          <Text style={styles.userName}>Albert Einstein</Text>
          <View style={styles.timeAndPublicityInfo}>
            <Text style={styles.timeInfo}>3 m · </Text>
            <PublicPost />
          </View>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.dots}>
          <Dots />
        </TouchableOpacity>
        <TouchableOpacity style={styles.close}>
          <AntDesign name="close" size={24} color={COLORS.feedUserIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 58,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo: { flexDirection: "row" },
  userName: {
    color: "black",
    fontWeight: "600",
    fontSize: 15.6,
  },
  textPart: {
    marginTop: 11,
    marginLeft: 7,
  },
  dots: {
    marginTop: 1.2,
    marginRight: 22.5,
  },
  icons: {
    flexDirection: "row",
    marginRight: 11,
    marginTop: 6,
  },
  timeInfo: {
    color: COLORS.feedUserIcons,
  },
  timeAndPublicityInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
});
