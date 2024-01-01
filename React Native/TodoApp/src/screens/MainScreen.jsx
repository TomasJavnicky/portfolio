import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { todoListAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { COLORS } from "../utils/colors";

export default MainScreen = () => {
  const [todoList] = useAtom(todoListAtom);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Things to do:</Text>
      <AddTodo />
      <Todo title={todoList[0]} />
      <Text>You have {todoList.length} things to do.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 42,
  },
});
