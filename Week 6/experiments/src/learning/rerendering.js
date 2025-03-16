import React, { Fragment, useState} from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("My name is Subodh");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    // remember you can never return two or more child elements at once without any parent element
    // in this below example the outer div worked as the parent element for the header ones
    //  <div>
    //   <Header title="subodh1"></Header>
    //   <Header title="subodh2"></Header>
    //  </div>

    // another way instead of using div is <Fragment>
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}

      <button onClick={updateTitle}>Update the title</button>
      <Header title ={title}></Header>
      <Header title="hARKIRAT"></Header>
      <Header title="harkirat1"></Header>
    </div>
  );
}

// way one by pushing the state down we can reduce the number of re-render
// function HeaderWithButton(){
//   const [title, setTitle] = useState("My name is Subodh")
//   function updateTitle(){
//      setTitle("My name is "+ Math.random())
//   }

//   return <div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title ={title}></Header>
//   </div>
// }

// destructuring
// component creation
// function Header({ title }) {
//   return <div>{title}</div>;
// }



// using the second way of memoziation for the reducing the number of rerenders
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})
export default App;
