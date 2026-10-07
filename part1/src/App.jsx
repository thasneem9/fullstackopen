import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(
  {
  up:0,
  down:0
 }

)
 const handlePlus=()=>{
  count['up']+=1
  console.log(count)
  
   setCount(count)
  console.log("afterSetCount: ",count)
   
 }
  return (
    <>
       <button onClick={handlePlus}>plus</button>
       <p>up value is noow: {count['up']}</p>
    </>
  )
}
export default App  




