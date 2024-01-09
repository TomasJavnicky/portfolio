import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default RegisterScreen = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const navigation = useNavigation();

  const handleRegistration = async (username, email, password) => {
    try {
      await axios.post("http://localhost:4000/adduser", {
        username: username,
        password: password,
        email: email,
      });
      console.log("Account created!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <Text>Register!</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        value={newUsername}
        onChangeText={(text) => {
          setNewUsername(text);
        }}
        style={styles.inputField}
      />
      <TextInput
        placeholder="E-mail"
        autoCapitalize="none"
        autoCorrect={false}
        value={newEmail}
        onChangeText={(text) => {
          setNewEmail(text);
        }}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => {
          setNewPassword(text);
        }}
        style={styles.inputField}
      />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          if (
            newUsername.length > 1 &&
            newEmail.length > 1 &&
            newPassword.length > 1
          ) {
            handleRegistration(newUsername, newEmail, newPassword);
            Alert.alert(
              "Account successfully created!",
              "Go back to login screen and log in!",
              [{ text: "OK", onPress: () => navigation.navigate("Login") }]
            );
          } else {
            Alert.alert(
              "Something went wrong!",
              "Username, passoword or e-mail is too short!",
              [{ text: "OK" }]
            );
          }
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {},
  registerButton: {
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
