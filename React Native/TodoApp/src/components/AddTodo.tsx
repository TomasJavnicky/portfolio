import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { todoListAtom, newTodoAtom } from "../utils/atoms";
import { COLORS } from "../utils/colors";

interface Props {}

const AddTodo: React.FC<Props> = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom);
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.components}>
        <Text style={styles.thingsToDo}>Things to do:</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder={"Add new todo..."}
            onChangeText={(todo) => setNewTodo(todo)}
            style={styles.input}
            value={newTodo}
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={() => {
              setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
              setNewTodo("");
            }}
          >
            <Entypo
              name="plus"
              size={24}
              color={COLORS.complementary}
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.headerBackgroundColor,
    width: "100%",
    borderRadius: 42,
    paddingBottom: 10,
    paddingTop: 80,
    alignItems: "center",
  },
  components: {
    width: "80%",
  },
  inputView: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: COLORS.todoBackgroundColor,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 21,
    marginLeft: 20,
  },
  thingsToDo: {
    fontSize: 26,
    fontWeight: "300",
    marginBottom: 30,
  },
});

export default AddTodo;
