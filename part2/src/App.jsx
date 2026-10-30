import { useState ,useEffect} from "react"
import SearchFilter from "./components/SearchFilter"
import AddContactForm from "./components/AddContactForm"
import DisplayContacts from "./components/DisplayContacts"
import axios from 'axios'
import dbcontacts from '../db.json'
const App=()=>{


const [contacts,setContacts]=useState([dbcontacts.contacts])


useEffect(()=>{
  const promise=axios.get('http://localhost:3001/contacts') //shud be name of the json
  promise.then(response=>{
    console.log(response.data)
    setContacts(response.data)
      })
},[])




  return(<>
  <h1>pb</h1>

    <SearchFilter contacts={contacts}/>
   <AddContactForm contacts={contacts} setContacts={setContacts}/>
   <DisplayContacts contacts={contacts}/>
 
   
  </>)
}
export default App
