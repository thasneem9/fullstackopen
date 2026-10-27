
const Course=(props)=>{
const c=props.course


    return(
     <div key={c.id}>
      <h1>{c.name}</h1>
        { c.parts.map(p=>(<p key={p.id}>{p.name} {p.exercises}</p>))}

      <p> total: { c.parts.reduce((accumulator, arr) => {
          return accumulator + arr.exercises
    }, 0)
       }
     </p>
   
    </div> 
    )
}

export default Course