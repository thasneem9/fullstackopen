import { useState,useEffect } from "react"
import Notification from "./Notification"
import services from "../services/services"

const AddContactForm=({contacts,setContacts})=>{

const [number,setNumber]=useState('')
const [name,setName]=useState('')
const [imp,setImp]=useState(false)
const [showNotification,setShowNotification]=useState(false)




let newContact={'name':'','important':false,'number':404404}

  const handleAddContact=(e)=>{
      e.preventDefault()
  
  newContact.name=name
  newContact.important=imp
  newContact.number=number

    
    let sameNameContact=contacts.find(c=>c.name==name)

    console.log("found sameNameContact",sameNameContact)
    
    if(sameNameContact){
      //1.same name, diff number
        if(sameNameContact.number!=number){
        //update numb
              let updatedNote={...sameNameContact,number:number}
              console.log("the updated NOte:",updatedNote,"id:",sameNameContact.id)
              const promise=services.updateNote(sameNameContact.id,updatedNote)
              promise.then(response=>{
                console.log(response)
                alert(`number updated for ${name}`)
              }).catch(error=>console.log("err:",error))
      //2. same name, same number : if(sameNameContact.number===number)
      }else {

      console.log("duplicate same number--",sameNameContact.number)
   
        setShowNotification(true)

      }
//2. no same contact at all
  }else{
      const data=services.addNote(newContact)
            console.log("added",data)
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
      {showNotification?<Notification message={`${name} with same number already exists`}/>:''}
      <label> Mark important
      <input type='checkbox'  onChange={(e)=>setImp(e.target.checked)}  />
       </label>
      
      <br/>
      <button type='submit'>Add</button>

    
    </form>
    
    
    
    </>)
}
export default AddContactForm