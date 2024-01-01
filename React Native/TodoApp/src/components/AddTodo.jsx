import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { atom, useAtom } from "jotai";
import { todoListAtom, newTodoAtom } from "../utils/atoms";

export default AddTodo = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Add new todo..."
        onChangeText={(todo) => setNewTodo(todo)}
      />
      <TouchableOpacity
        onPress={() =>
          setTodoList((prevTodoList) => [...prevTodoList, newTodo])
        }
      >
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
});
