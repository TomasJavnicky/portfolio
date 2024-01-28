import React from "react";
import "./AddTodoButton.css";
import { useSetAtom } from "jotai";
import { addNewTodoAtom } from "../../utils/atoms";

const AddTodoButton = () => {
  const addNewTodo = useSetAtom(addNewTodoAtom);
  return (
    <button className="add-todo-button" onClick={addNewTodo}>
      +
    </button>
  );
};

export default AddTodoButton;
