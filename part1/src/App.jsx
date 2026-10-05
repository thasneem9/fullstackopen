import Header from "../components/Header"
import Content from "../components/Content"
import Total from "../components/Total"
import RoughExperiment from "../components/RoughExperiment"
const App = ({final,count,text}) => {
  const course = 'Half Stack application development'

  const parts=[
    {
    name:"'Fundamentals of React'",
    ex:10
  },
  {
    name:"Using props to pass data",
    ex:7
  },
  {
    name:"State of a component",
    ex:14

  }
]




/**open each 3 to see diff kinds of props passing */
  return (
    <>
    {count}

    {count==6?<p>{final}</p>:text}
     {/* 
    <Header course={course}/>
    <Content parts={parts}/>
    <Total total={parts[0].ex+parts[1].ex+parts[2].ex}/>
    <RoughExperiment/>
    */}
    </>
  
  )
}

export default App  