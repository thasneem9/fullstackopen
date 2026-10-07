import Content from "../components/Content"
import Counter from "../components/Counter"
import IncreaseButton from "../components/IncreaseButton"
import ZeroButton from "../components/ZeroButton"
import { useState } from "react"
const App = () => {
 const [count,setCount]=useState(0)




  return (
    <>
  <Counter count={count}/>
  <IncreaseButton setCount={setCount} count={count}/>
  <ZeroButton setCount={setCount}/>

    </>
  )
}

export default App  

