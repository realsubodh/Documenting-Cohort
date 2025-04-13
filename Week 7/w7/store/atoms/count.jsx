import {atom, selector} from "recoil"


export const countAtom = atom({
    key:"countAtom", // make sure you don't have conflicting keys
    default: 0,
})

// defining the selector
export const evenSelector = selector({
    key: "evenselector",
    get: ({get}) =>{
        const count = get(countAtom)
        return count % 2
    }
})
// same as useMemo => selector