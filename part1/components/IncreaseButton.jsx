const IncreaseButton=({setCount,count})=>{


    return(

        <>
        <button onClick={()=>setCount(count+1)}>increase</button>
        </>
    )
}

export default IncreaseButton