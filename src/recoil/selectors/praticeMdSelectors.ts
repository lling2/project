
import { selector } from "recoil";
import { praticeMdState } from "../atoms/praticeMdAtoms";
import { LoginInfo } from "@models/loginInfo";
import { storage } from "@utils/index";
import { praticeMdType } from "@models/praticeMd";

export const praticeMdListSel = selector({
  key: "praticeMdListSel",
  get: ({ get }) => {
    let praticeMdList = get(praticeMdState);
    return praticeMdList;
  },
  set: ({ set }, newVal: praticeMdType[]) => {
    set(praticeMdState, newVal);
  },
});
