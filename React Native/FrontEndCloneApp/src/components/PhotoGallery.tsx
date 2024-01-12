import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const PhotoGallery: React.FC = () => {
  return (
    <View>
      <View style={styles.firstRow}>
        <Image
          source={require("../img/gallery/photo1.jpg")}
          style={styles.firstRowPhotos}
        />
        <Image
          source={require("../img/gallery/photo2.jpg")}
          style={styles.firstRowPhotos}
        />
      </View>
      <View style={styles.secondRow}>
        <Image
          source={require("../img/gallery/photo3.jpg")}
          style={styles.secondRowPhotos}
        />
        <Image
          source={require("../img/gallery/photo4.jpg")}
          style={styles.secondRowPhotos}
        />
        <Image
          source={require("../img/gallery/photo5.jpg")}
          style={styles.secondRowPhotos}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstRow: {
    flexDirection: "row",
    marginLeft: -5.6,
    justifyContent: "space-between",
    marginTop: 8,
  },
  firstRowPhotos: {
    width: screenWidth * 0.5 - 2.5,
    height: screenWidth * 0.5 - 2.5,
  },
  secondRow: {
    flexDirection: "row",
    marginLeft: -5.6,
    justifyContent: "space-between",
    marginTop: 4.7,
  },
  secondRowPhotos: {
    width: screenWidth * 0.333 - 2.5,
    height: screenWidth * 0.333 - 2.5,
  },
});

export default PhotoGallery;
