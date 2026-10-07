const DecreaseButton=({onDecrease})=>{
{/*React's own official tutorial suggests: "In React, it’s conventional to use onSomething names for props
   which take functions which handle events and handleSomething for the actual function definitions which handle 
   those events." */}


    return(

        <>
        <button onClick={onDecrease}>decrease count--</button>
        </>
    )


}
export default DecreaseButton

