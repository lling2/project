
import { atom } from "recoil";
import { initPraticeMd } from "@models/praticeMd";

export const praticeMdState = atom({
  key: "praticeMdState",
  default: initPraticeMd(),
});
