import { atom } from "jotai";

export const emailAtom = atom("");
export const passwordAtom = atom("");
export const userLoggedInAtom = atom(false);
export const userDataAtom = atom({
  user_id: Number,
  username: "",
  email: "",
});
