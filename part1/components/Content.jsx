import Part from "./Part"
const Content=({part1,...props})=>{
/*THis means use part1 directly, but rest ofthe thinsg use props */

    return(
        <>
        <Part name={part1} ex={props.ex1}/>
        <Part name={props.part2} ex={props.ex2}/>
        <Part name={props.part3} ex={props.ex3}/>
        </>
    )
}
export default Content