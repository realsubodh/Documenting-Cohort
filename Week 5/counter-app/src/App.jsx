import { useState } from 'react'
import './App.css'

// for making a dynamic website we need two things :: state, component

// building a todo application
// what should be the component
// todo {
//        todos:[{title:"todo1", description:"first todo", completed: false, }]
//      }



function App() {
  // first and foremost we define the array of the task
  const [todos,setTodos]= useState([{
    title:"go to the gym",
    description:"timing will be 5-8",
    completed:false
  },
  {
    title:"study dsa",
    description:"from striver course",
    completed:true
  },
  {
    title:"studying dsa",
    description:"studying in dsa from take you forward plus",
    completed:true
  }, ])

function addTodo(){
    setTodos([...todos,{    
      title:"new todo",
      description:"desc of new todo"
    }])
}
  // now what is this ...todo ? so this will spread the original todos(retain) and add the new ones after them
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo){   // .map is used to iterate same like for loops
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

//component
// why this way, because i can use this compnonent anywehere and anytime easily, production ready

// now we create a component which takes input of todos in the form of:
// todo app,{
//  title,
//  description }
function Todo(props){
  return( 
  <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>

)}

export default App
