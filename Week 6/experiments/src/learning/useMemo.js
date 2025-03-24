// task 3: UseMemo
/* Create an app that does two things-
   1. increase a counter by 1
   2. let user put a value in an input box(n) and you need to 
   show sum from 1-n

One restriction - everything needs to be inside App
*/

import { useState, useMemo } from "react";


function App(){
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1)
    
    let count= useMemo(()=>{
        console.log("memo initialized")
        let finalcount = 0
        for (let i = 0; i <= inputValue; i++) {
            finalcount = finalcount + i
        }
        return finalcount
    }, [inputValue])
   // you can also use useEffect instead of this, but the problem is that memo lets you to save the cut of the expensive unecessary rerendering and slightly better than useEffect
    // useMemo is used Rarely
    return <div>
        <input onChange={function(e){
            setInputValue(e.target.value)   // e.target.value fn gives the actual value which you put inside the input
        }} placeholder="Find sum from 1 to n"/>
        <br />
        Sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={()=> {
            setCounter(counter + 1)
        }}> Counter ({counter})</button>
    </div>
}
export default App