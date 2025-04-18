import {atom, selector} from "recoil";

// L1: never repeat the key in the different atoms layer
export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

// showing total notifications toasts on a single pane
// using selector instead of useMemo()
export const totatlNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=> {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificationsAtom)
        const messagingAtomCount = get(messagingAtom)

        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
    }
})