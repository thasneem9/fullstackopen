import { useState,useEffect } from "react"
import axios from 'axios'
import services from "../services/services"

const AddContactForm=({contacts,setContacts})=>{

const [number,setNumber]=useState('')
const [name,setName]=useState('')
const [imp,setImp]=useState(false)




let newContact={'name':'','important':false,'number':404404}

  const checkDuplicate=(arr,val)=>{
    return arr.some(arrVal=>arrVal.name===val)

  }
  
const handleAddContact=(e)=>{
  e.preventDefault()
  
  newContact.name=name
  newContact.important=imp
  newContact.number=number

  if(checkDuplicate(contacts,name)){
      alert(`${name} already exists`)}
  else{
        //setContacts([...contacts,newContact]) needed to update in UI ????
        const data=services.addNote(newContact)
          
            console.log(data)
          
  }
}

    return(<>

     <form onSubmit={handleAddContact}>
      <label>name:
      <input placeholder="John Doe" onChange={(e)=>setName(e.target.value)} value={name}  />
      </label>

      <br/>

      <label> phone:
      <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="+91 793 446 5289" required/>
      </label>

      <br/>
      
      <label> Mark important
      <input type='checkbox'  onChange={(e)=>setImp(e.target.checked)}  />
       </label>
      
      <br/>
      <button type='submit'>Add</button>

    
    </form>
    
    
    
    </>)
}
export default AddContactForm