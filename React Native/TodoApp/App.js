import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Todo from "./src/components/Todo";

export default App = () => {
  const [todoList, setTodoList] = useState(["todo1", "todo2", "todo3"]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Things to do:</Text>
      <TextInput placeholder="Add new todo..." />
      <Todo title={todoList[0]} />
      <Text>You have {todoList.length} things to do.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
