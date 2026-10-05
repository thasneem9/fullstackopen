
import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(0)

setTimeout(()=>{
  setCount(count+1)
},1000)


  return (
    <p>count:{count}</p>
  )
}

export default App  

