import { View, FlatList, StyleSheet } from "react-native";
import Todo from "./Todo";
import { todoListAtom } from "../utils/atoms";
import { useAtom } from "jotai";

export default TodosList = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const handleDeleteTodo = (todoTitle) => {
    const updatedTodoList = todoList.filter((title) => title !== todoTitle);
    setTodoList(updatedTodoList);
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => (
          <Todo title={item} onDelete={handleDeleteTodo} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10,
  },
});
