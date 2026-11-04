import { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {
  const [search,setSearch]=useState('')
  const [countries,setCountries]=useState([])

  //render only during initial Mount-one time. hence empty dependency
  useEffect(()=>{
    const promise=axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    promise.then(response=>{
      console.log(response.data)
      setCountries(response.data)
    })

  },[])
  const handleSearch=(e)=>{
    setSearch(e.target.value)

  }
  let filteredCountries=countries?.filter(c=>c.name.common.toLowerCase().includes(search.toLowerCase()))
  const matchLength=filteredCountries?.length
  const handleShow=(c)=>{
    setSearch(c.name.common)
  }
 
  return(
    <>
    <label>search for countries: </label>
    <input
    type="text"
    placeholder="search for a country by name..."
    onChange={(e)=>{handleSearch(e)}}
    />

    {
      search==''? 
      null
      :matchLength===1? //show specific
       (<div>
              <h1>sepcific country:</h1>
              <p>{filteredCountries[0].name.common}</p>
        </div>)
      :matchLength<=10? //list of matches 
      filteredCountries.map(c=><>
      <p>{c.name.common}</p>
      <button onClick={()=>handleShow(c)}>show</button>
      </>)  
      :matchLength>10?
      <p>bemore specific..too many matches</p>
        :''

    }

    
    </>
  )
}

export default App