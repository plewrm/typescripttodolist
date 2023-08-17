import AddTodo from './components/addtodo'
import Todoss from './components/todoss'
import './App.css'
import Navbar from './components/navbar'
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { GrNotes } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
function App() {

  return (
    <>
  <main>
    <h1><GrNotes/>Todo list TypeScript with React...<BsPencilFill/></h1><br/>
    <Navbar/>
    <AddTodo/>
    <Todoss/>
  </main>
    </>
  )
}

export default App
