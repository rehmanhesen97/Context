import { useState } from "react"
import Main from "./components/Mainpage/Main"
import Container from 'react-bootstrap/Container'
import { CountContext } from "./components/Context/Context"
import Counts from "./components/Creatpage/Count"


function App() {
  // const [name, setName] = useState(() => {
  //   // getting stored value
  //   const saved = localStorage.getItem("name");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
const [count,setCount]=useState(()=>{
  const countss=localStorage.getItem("say");
  const initialValue = JSON.parse(countss);
  return initialValue || "";


})

const [newCount, setNewCount]=useState(()=>{
    const newcountss=localStorage.getItem("say");
    const initialValue = JSON.parse(newcountss);
    return initialValue || "";
  
})



const countss=localStorage.getItem("say")
    console.log(countss);

// console.log(initialValue);
// setCount(localStorage.getItem("say"))

  return (
    <CountContext.Provider value={{
      countss,
      // initialValue,
      setNewCount,
      newCount,
      count,
      setCount
      }}>
      <Container>
    <div  className='m-5'>
      <Main/>
      <Counts/>
    </div>
    </Container>
    </CountContext.Provider>
  )
}

export default App
