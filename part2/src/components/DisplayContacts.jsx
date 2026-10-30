import { useState } from "react"
import axios from 'axios'


const DisplayContacts=({contacts,setContacts})=>{
    const [showImp,setShowImp]=useState(false)

        
    const handleShowImp=(e)=>{
        e.preventDefault()
    setShowImp(!showImp)
    }
    const toggleImportance=(id,imp)=>{
    console.log("called togggles")
        //update object using id- to send as object
          //fetch the contact with id
          
            let contactToUpdate=contacts.find(c=>c.id===id)
            console.log("contactToUpdate",contactToUpdate)
            //update the fetched contact's attribute
            let updatedContact={...contactToUpdate,important:!contactToUpdate.important}
         
             console.log("updatedContact: ",updatedContact)

        //update the data in json-server:
        const promise=axios.put(`http://localhost:3001/contacts/${id}`,updatedContact)
        promise.then(response=>{
            console.log("resp:",response)
        })

        //update UI hence chnage state of contacts
        setContacts(contacts.map(c=>{   //if ABC THEN RETURN x, else RETURN Y... its returning what to map down
           return c.id==id?updatedContact:c
        }))
    
    }



    return(<>

<button onClick={handleShowImp}>{showImp?'show all':'show important contacts'}</button>
<h1>cntcss:</h1>

  {showImp?contacts.filter(c=>c.important===true).map((ci,i)=>(<p key={i}>{ci.name} {ci.number}</p>)):
  contacts.map((cx,i)=>(
    
    <div key={i}>
    <p > name:{cx.name} {cx.number}</p>
    <button  onClick={()=>toggleImportance(cx.id,cx.important)}>{cx.important?'mark as not imp':'mark as imp'}</button>
    </div>
     ))}

    
</>)
}
export default DisplayContacts