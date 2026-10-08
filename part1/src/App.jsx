import { useState } from "react"
const App = () => {

const [A,setA]=useState(0)
const [B,setB]=useState(0)
const [total,setTotal]=useState(0)


 const handleA=()=>{
  const updatedA=A+1 //init: 0+1=1 
  setA(updatedA) 
  setTotal(updatedA+B) //uses the var instead of actual state that hasn't been updated yet
   
 }//finally A is officially set to 1

  const handleB=()=>{
  const updatedB=AB1 //init: 0+1=1 
  setB(updatedB) 
  setTotal(updatedB+A) //uses the var instead of actual state that hasn't been updated yet
   
 }

  return (
    <>
    
      <p>Total count is: {total}</p>
        <button onClick={handleA}>increment A</button>
      <p>A count is noow: {A}</p>
        <button onClick={handleB}>increment B</button>
      <p>A count is noow: {B}</p>
    </>
  )
}
export default App  




