import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { userDataAtom, userLoggedInAtom } from "../utils/atoms";
import { useAtomValue, useAtom } from "jotai";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const DashboardScreen: React.FC = () => {
  const userData = useAtomValue(userDataAtom);
  const [isUserLoggedin, setIsUserLoggedIn] = useAtom(userLoggedInAtom);

  const handleDeleteAccount = async () => {
    console.log(userData.user_id);
    try {
      await axios.delete(`http://localhost:4000/${userData.user_id}`);
      setIsUserLoggedIn(false);
      Alert.alert("Account deleted!", "Thank you for the time spent with us.", [
        { text: "Cancel" },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity
          onPress={() => {
            setIsUserLoggedIn(false);
          }}
        >
          <Text style={styles.backButtonText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.greeting}>Hello {userData.username}</Text>
        <Text style={styles.text}>Your e-mail is: {userData.email}</Text>
        <TouchableOpacity onPress={handleDeleteAccount}>
          <Text style={styles.deleteButtonText}>Delete account</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f5faf7",
  },
  safeAreaView: {
    paddingLeft: 15,
    paddingTop: 0,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#58B37A",
  },
  greeting: {
    fontSize: 32,
    color: "#58B37A",
    fontWeight: "300",
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    color: "#58B37A",
    fontWeight: "300",
    marginTop: 20,
  },
  deleteButtonText: {
    fontSize: 18,
    color: "#f37540",
    fontWeight: "300",
    marginTop: 20,
  },
});

export default DashboardScreen;
