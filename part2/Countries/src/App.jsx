import { useEffect, useState } from "react"
import axios from 'axios'


function App() {
const [country,setCountry]=useState('')
const [allCountries,setAllCountries]=useState(null)
const [warning,setWarning]=useState(false)

const [countriesToDisplay,setCountriesToDisplay]=useState([])
const [singleCountry,setSingleCountry]=useState('')



//fetch countries as typed

//if more than 10 matches has to be specific...

//get All
useEffect(()=>{
  const promise=axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
promise.then(response=>{
    setAllCountries(response.data)
}).catch(error=>{
  console.log(error)
})
},[])


//first set country as person types [\]
// then justtt count responses
//if response is less than 10 only then map em out


console.log(allCountries)

useEffect(()=>{

  console.log(allCountries?.filter(c=>c.name.common.includes(country))  )
   console.log(allCountries?.filter(c=>c.name.common.includes(country)).length  )
   console.log(allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())).length  >10)
   console.log("x",allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())).length===1)
   if(allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())).length  >10){
    setWarning(true)
    setCountriesToDisplay([])
       setSingleCountry('')

   }else if(allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())).length===1){
      setWarning(false)
      setCountriesToDisplay([])
       setSingleCountry(allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())))
       console.log("here-------------------------------")

   }else{
    setWarning(false)
      setCountriesToDisplay(allCountries?.filter(c=>c.name.common.toLowerCase().includes(country.toLowerCase())))
       setSingleCountry('')
   }



   
},[country,allCountries])


  return (
    <>
  
    <label>Find Countries: </label>
    <input type="text" placeholder="search for a country" onChange={(e)=>setCountry(e.target.value)} />
    {/*using includes only display if less than 10 */}
    {warning?<p>too many matches, be more specific...</p>:''}
    {countriesToDisplay?countriesToDisplay.map((c,i)=>(<p key={i}>{c.name.common}</p>)):''}
  
    {singleCountry?
    (
      <>
    <p>name: {singleCountry[0].name.common} </p>
    <p>capital:{singleCountry[0].capital}</p>
      <p>language:{   Object.values(singleCountry[0].languages)[0]     }</p>
    </>
    )
    
    :''}

    
    </>
  )
}

export default App
