import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useSetAtom } from "jotai";
import { newTodoAtom } from "../utils/atoms";
import { COLORS } from "../utils/colors";
import MyTextInput from "./MyTextInput";
import MyAddButton from "./MyAddButton";

const AddTodo: React.FC = () => {
  const setNewTodo = useSetAtom(newTodoAtom);

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.components}>
        <Text style={styles.thingsToDo}>Things to do:</Text>
        <View style={styles.inputView}>
          <MyTextInput
            placeholder="Add new todo..."
            onChangeText={setNewTodo}
          />
          <MyAddButton />
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
  thingsToDo: {
    fontSize: 26,
    fontWeight: "300",
    marginBottom: 30,
  },
});

export default AddTodo;
