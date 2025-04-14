// App.jsx
import React from "react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-rendering is happening here")
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer/>
    </div>
  );
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)
  // fancy way of writing conditional statement 
  return <div>
    {isEven ? "It is even": null} 
  </div>
}
function Buttons() {
  // there is one more slightly better approach for building this product
  // we need only setCount, there is no need of the count here so we can remove the count by using ::

  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}


// The most expensive part of the react is updating the dom hence we need to minimize the number of re render as much as possible.
export default App;
