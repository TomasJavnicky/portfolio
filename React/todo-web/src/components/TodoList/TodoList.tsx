import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { todoListAtom, handleDeleteTodoAtom } from "../../utils/atoms";
import "./TodoList.css";

interface Props {}

const TodoList: React.FC<Props> = () => {
  const todoList = useAtomValue(todoListAtom);
  const handleDeleteTodo = useSetAtom(handleDeleteTodoAtom);
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((item, index) => (
          <li onClick={() => handleDeleteTodo(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
