
import Note from "../components/Note"

const App=({notes})=>{


  return(


    <>
    <h1>Notes</h1>
    <ul>
      { notes.map((note) => <Note key={note.id} content={note.content}/>)}
    </ul>
    
   
  
    </>
  )
}
export default App 



/*
const App=({notes})=>{
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

 */

 
