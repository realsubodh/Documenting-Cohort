import './App.css'

function App() {
return(
    <>
    <Todo title='go yo the gym' description='heeyyyy go to the gym' done={false}/>
    </>
)
}

//  giving types to the react component

interface TodoProp{
    title:string,
    description: string,
    done: boolean
}
function Todo(props: TodoProp){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App
