import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  isPassword: boolean;
}

const MyTextInput: React.FC<Props> = ({
  placeholder,
  onChangeText,
  isPassword,
}) => {
  return (
    <TextInput
      style={styles.inputField}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={isPassword}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "70%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 10,
    fontSize: 18,
    letterSpacing: 1.2,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default MyTextInput;
