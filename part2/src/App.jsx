import { useState ,useEffect} from "react"
import SearchFilter from "./components/SearchFilter"
import AddContactForm from "./components/AddContactForm"
import DisplayContacts from "./components/DisplayContacts"
import axios from 'axios'
import dbcontacts from '../db.json'
const App=()=>{


const [contacts,setContacts]=useState(dbcontacts.contacts)
    const [imp,setImp]=useState(false)//bcs 2 components need this

//GET REQ
useEffect(()=>{
  const promise=axios.get('http://localhost:3001/contacts') //shud be name of the json
  promise.then(response=>{
    console.log(response)
    setContacts(response.data)
      })
},[])



  return(<>
  <h1>pb</h1>

    <SearchFilter contacts={contacts}/>
   <AddContactForm contacts={contacts} setContacts={setContacts} imp={imp} setImp={setImp}/>
   <DisplayContacts contacts={contacts} setContacts={setContacts} setImp={setImp}/>
 
   
  </>)
}
export default App
