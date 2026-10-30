import { useState } from "react"

const SearchFilter=({contacts})=>{
const [searchItem,setSearchItem]=useState('')
console.log("searchHere",contacts)


    return(<>
      {/*search/filter contacts */}
  <label>Search contact:<input type='text' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/></label>
  {searchItem===''?'':
  contacts.filter(c=>c.name.toLowerCase().includes(searchItem.toLowerCase())).map(
    (n,i)=>(<p key={i}>name:{n.name}</p>))}

    </>)
}
export default SearchFilter