
import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(0)




  return (
    <>
    <button onClick={()=>console.log("yo, im clicked")}>console log info</button>
   {/*  <button onClick={setCount(count+1)}>increase counter</button>   THIs shit breaks bcs event handler must be a function*/}
   <button onClick={()=>setCount(count+1)}>increase counter</button>
    <p>count:{count}</p>
    </>
  )
}

export default App  

