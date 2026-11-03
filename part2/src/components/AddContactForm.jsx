import { useState,useEffect } from "react"
import axios from 'axios'
import services from "../services/services"

const AddContactForm=({contacts,setContacts})=>{

const [number,setNumber]=useState('')
const [name,setName]=useState('')
const [imp,setImp]=useState(false)




let newContact={'name':'','important':false,'number':404404}

  const handleAddContact=(e)=>{
      e.preventDefault()
  
  newContact.name=name
  newContact.important=imp
  newContact.number=number

    
    let sameNameContact=contacts.find(c=>c.name==name)
    console.log("found same name",sameNameContact)
    //1.same name diff number
    if(sameNameContact){
      if(sameNameContact.number!=number){
        //update numb
        let updatedNote={...sameNameContact,number:number}
        console.log("the updated NOte:",updatedNote,"id:",sameNameContact.id)
        const promise=services.updateNote(sameNameContact.id,updatedNote)
        promise.then(response=>{console.log(response.data)
          alert(`number updated for ${name}`)
        }).catch(error=>console.log("err:",error))
      }
//2. same name same number
  }else if(sameNameContact){
     if(sameNameContact.number==number){
      console.log("duplicate same number--",sameNameContact.number)
      alert(`${name} with same number already exists`)}
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
      
      <label> Mark important
      <input type='checkbox'  onChange={(e)=>setImp(e.target.checked)}  />
       </label>
      
      <br/>
      <button type='submit'>Add</button>

    
    </form>
    
    
    
    </>)
}
export default AddContactForm