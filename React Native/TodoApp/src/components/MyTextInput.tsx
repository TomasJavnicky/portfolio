import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const MyTextInput: React.FC<Props> = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.inputField}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    fontSize: 21,
    marginLeft: 20,
  },
});

export default MyTextInput;
