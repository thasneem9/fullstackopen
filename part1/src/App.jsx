import DecreaseButton from "../components/DecreaseButton"
import IncreaseButton from "../components/IncreaseButton"
import ZeroButton from "../components/ZeroButton"
import Counter from "../components/Counter"
import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(
  {
  up:0,
  down:0
 }
)

  return (
    <>
    <p>count value: {count['down']}</p>

      <button onClick={()=>  setCount({up:0,down:count['down']-1})}>Minus</button>
   
    </>
  )
}

export default App  

