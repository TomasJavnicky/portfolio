import { StyleSheet, Text, View } from "react-native";

export default DashboardScreen = () => {
  return (
    <View style={styles.main}>
      <Text>DashboardScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "red",
  },
});
