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

const updateNote=(id,updatedNote)=>{
    const promise=axios.put(`${baseURL}/${id}`,updatedNote)
      return promise.then(response=>response.data)
}






const deleteNote=(id)=>{
const promise=axios.delete(`${baseURL}/${id}`)
return promise.then(response=>{
    return response.data
})


}
export default {getAll,addNote,updateNote,deleteNote} //exports AN OOBJECT WITH all 3 functions