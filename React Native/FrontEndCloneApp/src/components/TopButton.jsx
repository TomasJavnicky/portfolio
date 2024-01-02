import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";

export default TopButton = ({ icon }) => {
  return (
    <TouchableOpacity>
      <View style={styles.main}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.topIcons,
    borderRadius: 50,
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
});
