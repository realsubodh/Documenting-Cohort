import { Fragment, useState } from 'react'
import './App.css'

function App() {

  return (
    // remember you can never return two or more child elements at once without any parent element
    // in this below example the outer div worked as the parent element for the header ones
  //  <div>
  //   <Header title="subodh1"></Header>
  //   <Header title="subodh2"></Header>
  //  </div>

  // another way instead of using div
  <Fragment>
    <HeaderWithButton></HeaderWithButton>
    <Header title ="hARKIRAT"></Header>
    <Header title ="harkirat1"></Header>
  </Fragment>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Subodh")
  function updateTitle(){
     setTitle("My name is "+ Math.random())
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title ={title}></Header>
  </div>
}
// destructuring
// component creation 
function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
