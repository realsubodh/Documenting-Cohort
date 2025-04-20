 
import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   /*
    this gives two things
    contents (which is popping initially on the screen)
    state (which will be loaded afterwards on the screen)
    */
   if (todo.state === "loading") {
      return <div>loading...</div>
   } else if (todo.state === "hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )} else if (todo.state ==="hasError"){
      return <div>
        error while getting data from backend
      </div>
    }
   }


export default App
