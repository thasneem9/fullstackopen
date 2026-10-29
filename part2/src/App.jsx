import { useState } from "react"
import SearchFilter from "./components/SearchFIlter"
import AddContactForm from "./components/AddContactForm"
import DisplayContacts from "./components/DisplayContacts"

const App=()=>{

const [contacts,setContacts]=useState([
  {'name':'alice','important':true,'number':9876543456789},
  {'name':'alan','important':false,'number':12346666},
  {'name':'ALEX','important':false,'number':4516728},
  {'name':'alex-connnor','important':false,'number':718928732}
])

const [showImp,setShowImp]=useState(false)


const handleShowImp=(e)=>{
    e.preventDefault()
  setShowImp(!showImp)
}









  return(<>
  <h1>pb</h1>
  <SearchFilter contacts={contacts}/>
   <AddContactForm contacts={contacts} setContacts={setContacts}/>

     <button onClick={handleShowImp}>{showImp?'show all':'show important contacts'}</button>
   <DisplayContacts contacts={contacts} showImp={showImp}/>
 
  
    

  </>)
}
export default App
