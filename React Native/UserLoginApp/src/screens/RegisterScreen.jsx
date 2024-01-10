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
      <Text style={styles.title}>Register here!</Text>
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
        <Text style={styles.buttonText}>Confirm!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58B37A",
  },
  title: {
    color: "white",
    fontSize: 27,
    letterSpacing: 1.2,
    marginVertical: 20,
    fontWeight: "200",
  },
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
  registerButton: {
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
  buttonText: {
    color: "#58B37A",
    fontSize: 22,
    letterSpacing: 1.2,
    fontWeight: "400",
  },
});
