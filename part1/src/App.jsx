import Header from "../components/Header"
import Content from "../components/Content"
import Total from "../components/Total"
const App = () => {
  const course = 'Half Stack application development'

  
  const part1={
    name:"'Fundamentals of React'",
    ex:10
  }
  const part2={
    name:"Using props to pass data",
    ex:7
  }
  const part3={
    name:"State of a component",
    ex:14

  }
  console.log(part1,part1.name)
/**open each 3 to see diff kinds of props passing */
  return (
    <>
    <Header course={course}/>
    <Content part1={part1.name} ex1={part1.ex} part2={part2.name} ex2={part2.ex} part3={part3.name} ex3={part3.ex}/>
    <Total total={part1.ex+part2.ex+part3.ex}/>
   
    </>
  
  )
}

export default App  