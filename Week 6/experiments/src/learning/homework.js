// question statement
/*
    Write a component that takes a todo id as an input
And fetches the data for that todo from the given endpoint
And then renders it
How would the dependency array change?
*/

import { useEffect, useState } from "react";
import axios from "axios";

function App(){
    return <div>
        <Todo id={3}/>
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
    }, []) // this dependency is empty which means it will render for the first time only.


    return <div>
        {/* remember i am going to use the todo.todo because in my api data is in this form only
        harkirat bhaiya api is not working */}
        <h1>{todo.todo}</h1>   
        <h3>{todo.description}</h3>
    </div>
}

export default App;