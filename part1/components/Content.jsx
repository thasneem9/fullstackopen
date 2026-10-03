import Part from "./Part"
const Content=({parts})=>{

/*THis means use part1 directly, but rest ofthe thinsg use props

const Content=({part1,...props})=>{
        <Part name={part1} ex={props.ex1}/>
        <Part name={props.part2} ex={props.ex2}/>
        <Part name={props.part3} ex={props.ex3}/>
        </>
        
*/

    return(
        <>
        <Part name={parts[0].name} ex={parts[0].ex}/>
        <Part name={parts[1].name} ex={parts[1].ex}/>
        <Part name={parts[2].name} ex={parts[2].ex}/>
        </>
    )
}
export default Content