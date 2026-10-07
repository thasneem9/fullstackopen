import DecreaseButton from "../components/DecreaseButton"
import IncreaseButton from "../components/IncreaseButton"
import ZeroButton from "../components/ZeroButton"
import Counter from "../components/Counter"
import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(0)

 const handleDecrease=()=>{
  console.log("decreased,clicked")
  setCount(count-1)}



  return (
    <>
    <Counter count={count}/>

  <IncreaseButton setCount={setCount} count={count}/>
  <ZeroButton setCount={setCount}/>
  <DecreaseButton onDecrease={handleDecrease}/>
  {/*React's own official tutorial suggests: "In React, it’s conventional to use onSomething names for props
   which take functions which handle events and handleSomething for the actual function definitions which handle those events." */}
    </>
  )
}

export default App  

