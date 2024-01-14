import axios from "axios";
import { userLoggedInAtom, userDataAtom } from "../utils/atoms";
import { atom } from "jotai";

const handleDeleteAccountAtom = atom(
  null,
  async (get, set): Promise<"success" | "fail"> => {
    const userData = get(userDataAtom);
    try {
      await axios.delete(`http://localhost:4000/${userData.user_id}`);
      set(userLoggedInAtom, false);
      return "success";
    } catch (error) {
      console.log(error);
      return "fail";
    }
  }
);

export default handleDeleteAccountAtom;
