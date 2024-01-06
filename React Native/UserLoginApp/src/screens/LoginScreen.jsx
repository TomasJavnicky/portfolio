import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Welcome!</Text>
      <Text>Please log-in!</Text>
      <TextInput placeholder="e-mail" />
      <TextInput placeholder="password" />
      <View style={styles.registerPrompt}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text>Register!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    //backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  registerPrompt: {
    flexDirection: "row",
  },
});
