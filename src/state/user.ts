import { User, Session } from "@supabase/supabase-js";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type UserState = {
  user: User | null;
  session: Session | null;
};
export const userState = atom<UserState>({
  key: "user",
  default: {
    user: null,
    session: null,
  },
});
