import React from "react";
import { StyleSheet, Text, KeyboardAvoidingView, Alert } from "react-native";
import { useState } from "react";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import handleRegistrationAtom from "../functions/handleRegistration";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import { useAtomValue, useSetAtom } from "jotai";
import {
  newUsernameAtom,
  newPasswordAtom,
  newEmailAtom,
  createAccountButtonEnabledAtom,
} from "../utils/atoms";

const RegisterScreen: React.FC = () => {
  const setNewUsername = useSetAtom(newUsernameAtom);
  const setNewPassword = useSetAtom(newPasswordAtom);
  const setNewEmail = useSetAtom(newEmailAtom);
  const createAccountButtonEnabled = useAtomValue(
    createAccountButtonEnabledAtom
  );
  const handleRegistration = useSetAtom(handleRegistrationAtom);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <KeyboardAvoidingView style={styles.main}>
      <Text style={styles.title}>Register here!</Text>
      <MyTextInput
        placeholder="Username"
        onChangeText={setNewUsername}
        isPassword={false}
      />
      <MyTextInput
        placeholder="E-mail"
        onChangeText={setNewEmail}
        isPassword={false}
      />
      <MyTextInput
        placeholder="Password"
        onChangeText={setNewPassword}
        isPassword={true}
      />
      <MyButton
        disabled={!createAccountButtonEnabled}
        onPress={() => {
          console.log(createAccountButtonEnabled);
          handleRegistration().then((result) => {
            if (result === "success") {
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
          });
        }}
        isConfirmButton={true}
        text="Confirm!"
      />
    </KeyboardAvoidingView>
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
});

export default RegisterScreen;
