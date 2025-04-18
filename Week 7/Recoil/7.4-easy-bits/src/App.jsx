
//RecoilRoot

import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totatlNotificationSelector } from "./atoms"


function App() {
  // wrapping everything under the recoil root is must
 return <RecoilRoot> 
  <MainApp/>
 </RecoilRoot>
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationsAtom)
  const [messageAtomCount, setMessagingCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totatlNotificationSelector)
  // upperOne is same as useState
  return(
    <>
      <button>Home</button>

      <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount })</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messages {messageAtomCount}</button>
      <button>Notifications {notificationAtomCount}</button>

      <button onClick={()=>{
        setMessagingCount(messageAtomCount + 1)
      }}>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
