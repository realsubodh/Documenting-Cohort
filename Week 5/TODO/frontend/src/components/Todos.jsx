/*  How should it looks like?
todos = [{
title:"go to gym",
description: "something..."
}]
*/

// rendering the todos
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todo.completed == true ? "completed": "mark as complete"}</button>
            </div>
        })}
    </div>
}