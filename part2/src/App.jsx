import { useState } from "react"

const App=()=>{
const [contacts,setContacts]=useState([{'name':'alice','important':true},{'name':'john'}])
const [showImp,setShowImp]=useState(false)
const [imp,setImp]=useState(false)


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
const handleShowImp=(e)=>{
    e.preventDefault()
  setShowImp(!showImp)
}









  return(<>
  <h1>phonebook</h1>
  <div>
    <form>
      <p>name:</p>
      <input placeholder="John Doe" onChange={(e)=>setName(e.target.value)} value={name}  ></input>
      
      
      <p>important?</p>
      <label> yes <input type='radio' name={'important'} value={true} onChange={()=>setImp(true)} /></label>
        <label> no <input type='radio' name={'important'} value={false}onChange={()=>setImp(false)}/></label>
        <br></br>

        <button onClick={handleAddContact} >Add</button>

        <br></br>
       
        <br></br>
        <button onClick={handleShowImp}>{showImp?'show all':'show important'}</button>
    </form>
  </div>
 
  <h1>contacts:</h1>
  
  {showImp?contacts.filter(c=>c.important===true).map((c,i)=>(<p key={i}>{c.name}</p>)):contacts.map((c,i)=>(<p key={i}>{c.name}</p>))}

  </>)
}
export default App
