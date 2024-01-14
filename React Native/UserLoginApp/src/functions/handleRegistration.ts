import axios from "axios";
import { atom } from "jotai";
import { newUsernameAtom, newEmailAtom, newPasswordAtom } from "../utils/atoms";

const handleRegistrationAtom = atom(
  null,
  async (get, set): Promise<"success" | "fail"> => {
    const username = get(newUsernameAtom);
    const password = get(newPasswordAtom);
    const email = get(newEmailAtom);
    try {
      await axios.post("http://localhost:4000/adduser", {
        username,
        password,
        email,
      });
      return "success";
    } catch (error) {
      console.log(error);
      return "fail";
    }
  }
);

export default handleRegistrationAtom;
