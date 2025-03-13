import { useState } from "react"

export function CreateTodo(){

    const[title, setTitle]= useState("");
    const[description, setDescription] = useState("");

    return <div>
        <input type="text" id="title" style={{
            padding:10,
            margin:10
        }} placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}/> <br />

        <input type="text" id="description" style={{
            padding:10,
            margin:10
        }} placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.defaultValue)
        }}/> <br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })
        }}>Add Todo</button>
    </div>
}

