import React from "react";
import { Text, View, StyleSheet } from "react-native";
import UserHeader from "./UserHeader";
import PhotoGallery from "./PhotoGallery";

const Post: React.FC = () => {
  return (
    <View style={styles.main}>
      <UserHeader />
      <Text style={styles.postText}>
        Here are some sick photos from the latest photoshoot
      </Text>
      <PhotoGallery />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    marginLeft: 5.6,
  },
  postText: {
    marginLeft: 6.4,
    fontSize: 16,
  },
});

export default Post;
