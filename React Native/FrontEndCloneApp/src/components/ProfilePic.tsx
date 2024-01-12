import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfilePic: React.FC = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../img/profile_pic.jpeg")}
        style={styles.profilePic}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
});

export default ProfilePic;
