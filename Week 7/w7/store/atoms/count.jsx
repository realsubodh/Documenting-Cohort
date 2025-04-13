import {atom} from "recoil"


export const countAtom = atom({
    key:"countAtom", // make sure you don't have conflicting keys
    default: 0
})