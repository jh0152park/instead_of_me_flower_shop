import { atom } from "recoil";

export const currentMode = atom({
    key: "CurrentMode",
    default: "web",
});
