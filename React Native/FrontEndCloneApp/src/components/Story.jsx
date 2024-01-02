import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../utils/colors";

export default Story = ({ image }) => {
  return (
    <View style={styles.main}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{`Brad Pitt`}</Text>
    </View>
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
    borderRadius: 15,
  },
  text: {
    position: "absolute",
    alignSelf: "flex-end",
    color: COLORS.background,
    fontWeight: "700",
  },
});
