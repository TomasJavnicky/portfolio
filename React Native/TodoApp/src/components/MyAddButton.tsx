import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import { addNewTodoAtom } from "../utils/atoms";
import { useSetAtom } from "jotai";

const MyAddButton: React.FC = () => {
  const addNewTodo = useSetAtom(addNewTodoAtom);
  return (
    <TouchableOpacity onPress={addNewTodo}>
      <Entypo
        name="plus"
        size={24}
        color={COLORS.complementary}
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
};

export default MyAddButton;
