import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

interface UserData {
  user_id: number | undefined;
  username: string;
  email: string;
}

export const userDataAtom = atom<UserData>({
  user_id: undefined,
  username: "",
  email: "",
});

export const emailAtom = focusAtom(userDataAtom, (optic) =>
  optic.prop("email")
);
export const passwordAtom = atom<string>("");
export const userLoggedInAtom = atom<boolean>(false);

export const newPasswordAtom = atom<string | undefined>(undefined);
export const newUsernameAtom = atom<string | undefined>(undefined);
export const newEmailAtom = atom<string | undefined>(undefined);
export const createAccountButtonEnabledAtom = atom((get) => {
  return (
    !!get(newUsernameAtom) && !!get(newEmailAtom) && !!get(newPasswordAtom)
  );
});
