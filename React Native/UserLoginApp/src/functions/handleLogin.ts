import axios from "axios";
import { atom } from "jotai";
import {
  userLoggedInAtom,
  userDataAtom,
  emailAtom,
  passwordAtom,
} from "../utils/atoms";

interface LoginData {
  password: string;
  email: string;
}

const handleLoginAtom = atom(
  null,
  async (get, set): Promise<"success" | "fail"> => {
    const email = get(emailAtom);
    const password = get(passwordAtom);
    try {
      const response = await axios.get(`http://localhost:4000/`);
      const users = response.data;

      const user = users.find(
        (user: LoginData) => user.email === email && user.password === password
      );
      if (user) {
        set(userLoggedInAtom, true);
        set(userDataAtom, user);
        return "success";
      }
      return "fail";
    } catch (error) {
      console.log(error);
      return "fail";
    }
  }
);

export default handleLoginAtom;
