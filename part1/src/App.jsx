import { useState } from "react"
const App = () => {

 const [count,setCount]=useState(
  {
  up:0,
  down:0
 })
 const [clickList,setClickList]=useState([])
 const handlePlus=()=>{
  setCount({...count,up:count['up']+1})
  console.log(count)
  setClickList(clickList.concat('P'))
   
 }
 const handleMinus=()=>{
  setCount({...count,down:count['down']-1})
  console.log(count)
  setClickList(clickList.concat('M'))
   
 }
  return (
    <>
       <button onClick={handlePlus}>plus</button>
       <p>up value is noow: {count['up']}</p>

        <button onClick={handleMinus}> minus</button>
       <p>down value is noow: {count['down']}</p>

       <h3>LIST OF BUTTONS CLICKED: {clickList.join('~')}</h3>
    </>
  )
}
export default App  




