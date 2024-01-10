import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useAtom } from "jotai";
import {
  emailAtom,
  passwordAtom,
  userLoggedInAtom,
  userDataAtom,
} from "../utils/atoms";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default LoginScreen = () => {
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [isUserLoggedin, setIsUserLoggedIn] = useAtom(userLoggedInAtom);
  const [userData, setUserData] = useAtom(userDataAtom);

  const navigation = useNavigation();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:4000/`);
      const users = response.data;

      for (const user of users) {
        if (user.email === email && user.password === password) {
          setIsUserLoggedIn(true);
          setUserData(user);
          return;
        }
      }
      Alert.alert(
        "Login failed",
        "Email or password is wrong. Or user does not exist at all!",
        [{ text: "OK" }]
      );
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.main}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subtitleText}>Please log-in!</Text>
      <TextInput
        placeholder="e-mail"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        style={styles.inputField}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.logInButtonText}>SIGN IN</Text>
      </TouchableOpacity>
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
});
