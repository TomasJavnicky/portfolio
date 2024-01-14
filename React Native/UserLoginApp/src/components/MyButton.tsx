import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  isConfirmButton: boolean;
  text: string;
}

const MyButton = ({ onPress, isConfirmButton, text, ...props }: Props) => {
  return (
    <TouchableOpacity
      style={isConfirmButton ? styles.confirmButton : styles.loginButton}
      onPress={onPress}
      {...props}
    >
      <Text
        style={
          isConfirmButton ? styles.confirmButtonText : styles.logInButtonText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "70%",
    height: 55,
    backgroundColor: "#58B37A",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  logInButtonText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1.2,
    fontWeight: "300",
  },
  confirmButton: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  confirmButtonText: {
    color: "#58B37A",
    fontSize: 22,
    letterSpacing: 1.2,
    fontWeight: "400",
  },
});

export default MyButton;
