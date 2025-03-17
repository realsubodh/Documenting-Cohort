// one way of doing wrappers
// function App(){
//   return <div>
//   <CardWrapper innerComponent={<TextComponent/>}/>
//   </div>
// }
// function CardWrapper({innerComponent}){
//   // create a div which has a border (hint: the way to create a border is border:"2px solid black")
//   // and inside the div, renders the prop

//   return <div style={{border:"2px solid black" }}>
//     {innerComponent}
//   </div>
// }

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
//   }
// export default App


// real way of doing wrapper
function App(){
    return <div>
      <CardWrapper>card one</CardWrapper>
      <CardWrapper>card two</CardWrapper>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </div>
  }
  
  function CardWrapper({children}){
    return <div style={{border:"2px solid black", padding: 20, margin:30}}>
    {children}
    </div>
  }
  
  function TextComponent(){
     return <div>
      card three, defining in the different way
     </div>
  }
  
  export default App