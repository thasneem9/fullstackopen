import { useState ,useEffect} from "react"
import SearchFilter from "./components/SearchFilter"
import AddContactForm from "./components/AddContactForm"
import DisplayContacts from "./components/DisplayContacts"
import axios from 'axios'
import dbcontacts from '../db.json'


import services from "./services/services.js"
const App=()=>{


const [contacts,setContacts]=useState(dbcontacts.contacts)
    const [imp,setImp]=useState(false)//bcs 2 components need this

//GET REQ
useEffect(()=>{
  const data=services.getAll() 
  data.then(response=>{
  console.log("useffect log:",response)
    setContacts(response)
  }
  )
      
},[])



  return(<>
  <h1>pb</h1>

    <SearchFilter contacts={contacts}/>
   <AddContactForm contacts={contacts} setContacts={setContacts} imp={imp} setImp={setImp}/>
   <DisplayContacts contacts={contacts} setContacts={setContacts} setImp={setImp}/>
 
   
  </>)
}
export default App
