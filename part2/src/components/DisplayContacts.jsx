

const DisplayContacts=({contacts,showImp})=>{

    return(<>
     <h1>cntcss:</h1>
  {showImp?contacts.filter(c=>c.important===true).map((c,i)=>(<p key={i}>{c.name}</p>)):contacts.map((c,i)=>(<p key={i}>{c.name}</p>))}

    
    </>)
}
export default DisplayContacts