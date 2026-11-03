import { useState ,useEffect} from "react"
import SearchFilter from "./components/SearchFilter.jsx"
import AddContactForm from "./components/AddContactForm.jsx"
import DisplayContacts from "./components/DisplayContacts.jsx"
import dbcontacts from '../db.json'


import services from "./services/services.js"
const App=()=>{


    const [contacts,setContacts]=useState(dbcontacts.contacts)
    const [imp,setImp]=useState(false)//bcs 2 components need this

    const [showNotification,setShowNotification]=useState(false)
    const [type,setType]=useState('')
    const [message,setMessage]=useState('')

//GET REQ
useEffect(()=>{
  const data=services.getAll() 
  data.then(response=>{
  setContacts(response)
  }
  )
      
},[])



  return(<>
  <h1>Testing</h1>

   <SearchFilter contacts={contacts}/>
   <AddContactForm contacts={contacts} setContacts={setContacts} imp={imp} setImp={setImp}/>
   <DisplayContacts contacts={contacts} setContacts={setContacts} setImp={setImp} />
 
   
  </>)
}
export default App
