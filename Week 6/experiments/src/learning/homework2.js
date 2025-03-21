// question statement useEffect
/*
    we have to write a code in which if a user clicks on the buttons then the specific output renders
    on the screen which is kinda of pre set values
*/

import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  // state? useState
  const [selectedId, setselectedId] = useState(1)

  return <div>
    <button onClick={function(){setselectedId(1)}}>1</button>
    <button onClick={function(){setselectedId(2)}}>2</button>
    <button onClick={function(){setselectedId(3)}}>3</button>
    <button onClick={function(){setselectedId(4)}}>4</button>

    <Todo id={selectedId}/>
  </div>
}

function Todo({id}){
    const [todo,setTodo] = useState({})

    // implement use effect here
    useEffect(()=>{
        axios.get(`https://dummyjson.com/todos/${id}`) // this url is also different from bhaiya's url
        .then(response =>{
            setTodo(response.data)  //✅ Using response.data because the API returns a single object
            // Analogy for Better Understanding
            // Imagine you're ordering pizza:
            // 🍕 /order/3 → The delivery person hands you one pizza box directly.
            // 🍕 /orders → The delivery person hands you a big bag of multiple pizzas, so you need to pick your pizza from the bag (hence .todos).
        })
    }, [id])  // now we have pass the dependency as of id, which means now useEffect run everytime as the id changes


    return <div>
        Id:{id}
        {/* remember i am going to use the todo.todo because in my api data is in this form only
        harkirat bhaiya api is not working */}
        <h1>{todo.todo}</h1>   
        <h3>{todo.description}</h3>
    </div>
}

export default App;