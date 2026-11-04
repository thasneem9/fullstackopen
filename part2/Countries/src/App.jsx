import { useState,useEffect } from "react"
import axios from 'axios'
const App=()=>{
const [country,setCountry]=useState('')
const [countries,setCountries]=useState([])
const [warning,setWarning]=useState(false)
const [showDetails,setShowDetails]=useState(false)
const [matches,setShowMatches]=useState(false)

//get all the results first to operate/filter it later
useEffect(()=>{
    const promise=axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
promise.then(response=>{
  console.log(response.data)
  setCountries(response.data)//KNOW that this wil schedule a render
})//no need to run this every single time a state updates, hence I put it inside an empty dependecy-useffect
//--ony run once in initial render( inital mounting ) of App component  thats why it is inside3 a useEffect

},[])


console.log(countries)

//go through each country check the length of response
useEffect(()=>{
  console.log(country,"mycountry")
if(countries?.filter(c=>c.name.common.toLowerCase().includes(country?.toLowerCase())).length>10){//map is for when thers like <p> use filter as default
//when using includes to see search-match dont forget lowercase/uppercase
console.log("too big")
console.log(countries?.filter(c=>c.name.common.toLowerCase().includes(country?.toLowerCase())))
setWarning(true)
  setShowDetails(false)
  setShowMatches(false)

}else if(countries?.filter(c=>c.name.common.toLowerCase().includes(country?.toLowerCase())).length===1){
  setWarning(false)
  setShowDetails(true)
  setShowMatches(false)

}else{
  setWarning(false)
  setShowDetails(false)
  setShowMatches(true)


}

},[country])//bcs whenever country changes CHECK IF CONDITION AGAIN



  return(<>

  <label>find countries: </label>
  <input placeholder="search country by name..." type="text" onChange={(e)=>setCountry(e.target.value)}/>
  
  {warning?<p>too many matches...be more specific</p>:''}
  {showDetails? <>
  <p>Name:
  {countries.find(c=>c.name.common.toLowerCase().includes(country.toLowerCase())).name.common}
  </p></>  :''
  }
  {matches?
    countries.filter(c=>c.name.common.toLowerCase().includes(country?.toLowerCase())).map(
      c=>(
     
        <p>{c.name.common}</p>
     
      )
    )     :''}
  
  </>
  )
}

export default App