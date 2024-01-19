import { atom, Atom } from "jotai";
import { splitAtom } from "jotai/utils";

export const todoListAtom = atom(["Go shopping", "Cook lunch", "Send money"]);
export const todoListAtomsAtom = splitAtom(todoListAtom);
export const newTodoAtom = atom("");

export const handleDeleteTodoAtom = atom(
  null,
  (get, set, titleAtom: Atom<string>) => {
    const title = get(titleAtom);
    const todoList = get(todoListAtom);
    const updatedTodoList = todoList.filter((todoTitle) => todoTitle !== title);
    set(todoListAtom, updatedTodoList);
  }
);

export const addNewTodoAtom = atom(null, (get, set) => {
  const newTodo = get(newTodoAtom);
  const todoList = get(todoListAtom);
  const updatedTodoList = [...todoList, newTodo];
  set(todoListAtom, updatedTodoList);
});
