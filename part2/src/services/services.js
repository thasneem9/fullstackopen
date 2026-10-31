import axios from 'axios'

const baseURL='http://localhost:3001/contacts' //shud be name of the json

const getAll=()=>{
    const promise=axios.get(baseURL)
    return promise.then(response=>{
        return response.data
       })
       
}

const addNote=(newNote)=>{
    const promise=axios.post(baseURL,newNote)
      return promise.then(response=>response.data)
}

const updateNote=(updatedNote)=>{
    const promise=axios.put(baseURL,updatedNote)
      return promise.then(response=>response.data)
}
export default {getAll,addNote,updateNote} //exports AN OOBJECT WITH all 3 functions