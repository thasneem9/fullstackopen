import { useState } from "react"
const Course=({course})=>{

    
const result = course.parts.reduce((accumulator, arr) => {
  return accumulator + arr.exercises
}, 0)

    return(<>
    <h1>{course.name}</h1>
    {course.parts.map(c=><p key={c.id}>{c.name} {c.exercises}</p>
                    )}

                    <h3>total exercises:{result}</h3>
    </>)
}

export default Course

