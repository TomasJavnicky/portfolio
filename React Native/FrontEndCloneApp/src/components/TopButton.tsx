import React, { ReactNode } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";

interface Props {
  icon: ReactNode;
}

const TopButton: React.FC<Props> = ({ icon }) => {
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

export default TopButton;
