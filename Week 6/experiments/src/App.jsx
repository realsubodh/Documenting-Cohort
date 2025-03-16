import React, { Fragment, useState} from "react";
import "./App.css";


// we are going to initialize a global variable for updating the id of the todos after spreading it
let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "go to gym",
    description:"working on shredded body"
  },
  {
    id:2,
    title: "go to movie",
    description:"watching the diplomat"
  },
  {
    id:3,
    title: "go to lab",
    description:"working on react js"
  },
]);

function addTodo(){
  // spread function 
  setTodos([...todos, {
    id:counter++,
    title: Math.random(),
    description: Math.random()
  }])
}
 
  return (
  <div>
    <button onClick={addTodo}>Add a Todo</button>
    {/* This below fn for iterating over the todos */}
    {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>) }
  </div>
  );
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}
export default App;
