import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../utils/colors";

const screenWidth = Dimensions.get("window").width;

interface Props {
  icon: string;
  text: string;
  isPressed: boolean;
}

const BottomNavBarButton: React.FC<Props> = ({ icon, text, isPressed }) => {
  return (
    <TouchableOpacity>
      <View style={styles.main}>
        <View
          style={isPressed ? styles.pressedButtonUpperLine : styles.upperLine}
        />
        {icon}
        <Text style={isPressed ? styles.pressedButtonText : styles.buttonText}>
          {text}
        </Text>
        <View style={{ height: "25%" }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: screenWidth / 6,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  pressedButtonUpperLine: {
    height: 3,
    width: screenWidth / 6.4,
    backgroundColor: COLORS.fbBlue,
  },
  upperLine: {
    height: 3,
    width: screenWidth / 6.4,
  },
  pressedButtonText: {
    fontSize: 9,
    color: COLORS.fbBlue,
    letterSpacing: 0.2,
  },
  buttonText: {
    fontSize: 9,
    color: COLORS.feedUserIcons,
    letterSpacing: 0.2,
  },
});

export default BottomNavBarButton;
