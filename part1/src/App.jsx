import { useState } from "react"
const App = () => {

const [A,setA]=useState(0)
const [B,setB]=useState(0)
const [total,setTotal]=useState(0)


 const handleA=()=>{
  
  setA(A+1) 
  setTotal(A+B) 
 }

  const handleB=()=>{
 setB(B+1)
  setTotal(A+B)
   
 }

  return (
    <>
    
      <p>Total count is: {total}</p>
        <button onClick={handleA}>increment A</button>
      <p>A count is noow: {A}</p>
        <button onClick={handleB}>increment B</button>
      <p>B count is noow: {B}</p>
    </>
  )
}
export default App  




