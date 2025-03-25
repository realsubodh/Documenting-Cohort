import { useCallback } from "react";
import { useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
   const handleIncrement = useCallback(()=>{
    setCount(function(count){
        return count+1;
    })
   },[]) // we have did this because we don't need any dependecies which can lead to unnecessary rerender in the child component

    const handleDecrement= useCallback(()=>{
        setCount(count =>{
            return count - 1;
        })
    }, [])
    // remember both the above functions are same but just the way of writing is different, be okay with standard way of writing codes
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

// memo and useMemo are two completely different things
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
