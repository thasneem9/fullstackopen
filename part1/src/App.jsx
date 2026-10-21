  import { useState } from "react"


const App=()=>{
  const [good,setGood]=useState(0)
  const [bad,setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [total,setTotal]=useState(0)

  const [avg,setAvg]=useState(0)


  let x=0;
  
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



  return(

    <>
    <h1>Feedback website</h1>
    <button onClick={handleGood}>good</button>
    <button onClick={handleBad}>Bad</button>
    <button onClick={handleNeutral}>neutral</button>


    <p >good:{good}</p>
    <p >bad:{bad}</p>
    <p >neutral:{neutral}</p>
    <p >avg:{good?(avg/total)*100:0}%</p>
    <p >positive:{good?(good/total)*100:0}%</p>


   
  
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

 