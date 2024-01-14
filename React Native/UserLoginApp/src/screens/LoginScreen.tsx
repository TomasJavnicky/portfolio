import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useSetAtom } from "jotai";
import { emailAtom, passwordAtom } from "../utils/atoms";
import {
  useNavigation,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import handleLoginAtom from "../functions/handleLogin";

const LoginScreen: React.FC = () => {
  const setEmail = useSetAtom(emailAtom);
  const setPassword = useSetAtom(passwordAtom);
  const handleLogin = useSetAtom(handleLoginAtom);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");
    }, [])
  );

  return (
    <KeyboardAvoidingView style={styles.main}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subtitleText}>Please log-in!</Text>
      <MyTextInput
        placeholder="e-mail"
        onChangeText={setEmail}
        isPassword={false}
      />
      <MyTextInput
        placeholder="password"
        onChangeText={setPassword}
        isPassword={true}
      />
      <MyButton
        onPress={() => {
          handleLogin().then((result) => {
            if (result === "fail") {
              Alert.alert(
                "Login failed",
                "Email or password is wrong. Or user does not exist at all!",
                [{ text: "OK" }]
              );
            }
          });
        }}
        isConfirmButton={false}
        text="SIGN IN"
      />
      <View style={styles.registerPrompt}>
        <Text style={styles.registerPromtText}>DON'T HAVE AN ACCOUNT?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerPromtText}>REGISTER!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#58B37A",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 53,
    letterSpacing: 1.2,
    marginBottom: 20,
    fontWeight: "100",
  },
  subtitleText: {
    color: "white",
    fontSize: 27,
    letterSpacing: 1.2,
    marginVertical: 20,
    fontWeight: "200",
  },
  registerPrompt: {
    alignItems: "center",
  },
  registerPromtText: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1.2,
    fontWeight: "300",
    marginTop: 5,
  },
});

export default LoginScreen;
