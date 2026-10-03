const Content=({part1,...props})=>{
/*THis means use part1 directly, but rest ofthe thinsg use props */

    return(
        <>
        <ul>{part1}
        <li>{props.ex1} exercises</li>
        </ul>
         <ul>{props.part2} 
        <li>{props.ex2} exercises</li>
        </ul>
         <ul>{props.part3}
        <li>{props.ex3}exercises</li>
        </ul>
        </>
    )
}
export default Content