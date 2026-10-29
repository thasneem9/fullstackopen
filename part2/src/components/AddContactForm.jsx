import { useState } from "react"

const AddContactForm=({contacts,setContacts})=>{
    const [imp,setImp]=useState(false)
    const [number,setNumber]=useState()
const [name,setName]=useState('')
  let newContact={'name':'','imp':false}

  const checkDuplicate=(arr,val)=>{
    return arr.some(arrVal=>arrVal.name===val)

  }
const handleAddContact=(e)=>{
  e.preventDefault()
    newContact.name=name
  newContact.imp=imp
checkDuplicate(contacts,name)?alert(`${name} already exists`):setContacts([...contacts,newContact])

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
      <input type='checkbox'  onChange={(e)=>setImp(e.target.checked)} required />
       </label>
      
      <br/>
      <button type='submit'>Add</button>

    
    </form>
    
    
    
    </>)
}
export default AddContactForm