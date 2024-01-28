import React from "react";
import "./App.css";
import MyInput from "./components/MyInput/MyInput";
import TodoList from "./components/TodoList/TodoList";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton";
import { newTodoAtom } from "./utils/atoms";
import { useSetAtom } from "jotai";

function App() {
  const setNewTodo = useSetAtom(newTodoAtom);
  return (
    <div className="main">
      <div className="add-todo">
        <MyInput onChange={setNewTodo} />
        <AddTodoButton />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
