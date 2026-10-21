  import { useState } from "react"
import StatisticLine from "../components/StatisticLine"
import Button from "../components/Button"
const App=()=>{
  const [good,setGood]=useState(0)
  const [bad,setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [total,setTotal]=useState(0)

  const [avg,setAvg]=useState(0)


  
  const handleGood=()=>{
  setGood(good+1)
   setTotal(total+1)
   setAvg(avg+1)
  }
  const handleBad=()=>{
  setBad(bad+1)
   setTotal(total+1)
   setAvg(avg-1)
  }
  const handleNeutral=()=>{
  setNeutral(neutral+1)
   setTotal(total+1)
  }
 {/*   <p >good:{good}</p>
    <p >bad:{bad}</p>
    <p >neutral:{neutral}</p>
    <p >avg:{good?(avg/total)*100:0}%</p>
    <p >positive:{good?(good/total)*100:0}%</p> */}


  return(


    <>
    <h1>Feedback website</h1>
   <Button onClick={handleGood} buttonText="good"></Button>
   <Button onClick={handleBad} buttonText="bad"></Button>
   <Button onClick={handleNeutral} buttonText="neutral"></Button>

    {good?<>
    <StatisticLine text="good: " value={good}></StatisticLine>
    <StatisticLine  text="bad: " value={bad}></StatisticLine>
    <StatisticLine  text="neutral: " value={neutral}></StatisticLine>
    <StatisticLine  text="total: " value={total}></StatisticLine>
    <StatisticLine  text="positive:" value={(good/total)*100}></StatisticLine>
    <StatisticLine  text="avg:" value={(avg/total)*100}></StatisticLine>
    </> :<p>No feedback given</p>}
    
   
  
    </>
  )
}
export default App 





/* import { useState } from "react"


const App=()=>{
 let x=0;

  const handleX=()=>{

  x+=1
    console.log("x value:",x)
  }

  


  return(

    <>
    <h1>Feedback website</h1>
    <button onClick={handleX}>X button</button>
    <p>{x}</p>

    
    </>
  )
}
export default App */

 
