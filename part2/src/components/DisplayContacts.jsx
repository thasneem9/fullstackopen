import { useState } from "react"



const DisplayContacts=({contacts})=>{
    const [showImp,setShowImp]=useState(false)
const handleShowImp=(e)=>{
    e.preventDefault()
  setShowImp(!showImp)
}

    return(<>
         <button onClick={handleShowImp}>{showImp?'show all':'show important contacts'}</button>
     <h1>cntcss:</h1>
  {showImp?contacts.filter(c=>c.important===true).map((c,i)=>(<p key={i}>{c.name}</p>)):contacts.map((c,i)=>(<p key={i}>{c.name}</p>))}

    
    </>)
}
export default DisplayContacts