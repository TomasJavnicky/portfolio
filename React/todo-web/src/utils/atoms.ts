import { atom } from "jotai";

export const newTodoAtom = atom("");
export const todoListAtom = atom(["Go shopping", "Cook lunch", "Send money"]);

export const addNewTodoAtom = atom(null, (get, set) => {
  const newTodo = get(newTodoAtom);
  const todoList = get(todoListAtom);
  const updatedTodoList = [...todoList, newTodo];
  set(todoListAtom, updatedTodoList);
});

export const handleDeleteTodoAtom = atom(null, (get, set, todo: string) => {
  const todoList = get(todoListAtom);
  const updatedTodoList = todoList.filter(
    (todoToDelete) => todoToDelete !== todo
  );
  set(todoListAtom, updatedTodoList);
});
