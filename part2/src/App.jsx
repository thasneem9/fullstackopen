import { useState } from "react"

const App=()=>{
const [contacts,setContacts]=useState([{'name':'alice','important':true},{'name':'alan'},{'name':'ALEX'},{'name':'alex-connnor'}])
const [showImp,setShowImp]=useState(false)
const [imp,setImp]=useState(false)
const [searchItem,setSearchItem]=useState('')
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
const handleShowImp=(e)=>{
    e.preventDefault()
  setShowImp(!showImp)
}









  return(<>
  <h1>pb</h1>
  {/*search/filter contacts */}
  <label>Search contact:<input type='text' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/></label>
  {contacts.filter(c=>c.name.toLowerCase().includes(searchItem.toLowerCase())).map((n,i)=>(<p key={i}>{n.name}</p>))}

    <form onSubmit={handleAddContact}>
      <label>name:
      <input placeholder="John Doe" onChange={(e)=>setName(e.target.value)} value={name}  />
      </label>

      <br/>

      <label> phone:
      <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="+91 793 446 5289"/>
      </label>

      <br/>
      
      <label> Mark important
      <input type='checkbox'  onChange={(e)=>setImp(e.target.checked)} />
       </label>
      
      <br/>
      <button type='submit'>Add</button>

      <br/> 
      <button onClick={handleShowImp}>{showImp?'show all':'show important contacts'}</button>
    </form>
 
  <h1>cntcss:</h1>
  {showImp?contacts.filter(c=>c.important===true).map((c,i)=>(<p key={i}>{c.name}</p>)):contacts.map((c,i)=>(<p key={i}>{c.name}</p>))}


  </>)
}
export default App
