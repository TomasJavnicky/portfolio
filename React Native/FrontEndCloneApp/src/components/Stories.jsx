import { View, StyleSheet } from "react-native";
import Story from "./Story";

export default Stories = () => {
  return (
    <View style={styles.main}>
      <Story image={require("../img/story0.png")} />
      <Story image={require("../img/story1.jpg")} />
      <Story image={require("../img/story2.jpg")} />
      <Story image={require("../img/story3.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginLeft: 12,
  },
});
