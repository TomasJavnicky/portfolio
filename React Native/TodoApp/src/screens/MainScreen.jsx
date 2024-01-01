import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AddTodo from "../components/AddTodo";
import { todoListAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { COLORS } from "../utils/colors";
import TodosList from "../components/TodosList";

export default MainScreen = () => {
  const [todoList] = useAtom(todoListAtom);
  return (
    <View style={styles.main}>
      <AddTodo />
      <SafeAreaView style={styles.components}>
        <StatusBar style="auto" />
        {todoList.length === 0 ? (
          <Text style={styles.allDone}>All done for today!</Text>
        ) : null}
        <TodosList />
        <Text style={styles.footer}>
          You have {todoList.length} more thing
          {todoList.length === 1 ? "" : "s"} to do.
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    alignItems: "center",
    margin: 8,
    borderRadius: 42,
  },
  components: {
    alignItems: "center",
    flex: 1,
  },
  allDone: {
    fontSize: 40,
    color: "#D3D3D3",
    marginTop: 60,
  },
  footer: {
    marginBottom: 50,
    marginTop: 10,
    fontSize: 18,
  },
});
