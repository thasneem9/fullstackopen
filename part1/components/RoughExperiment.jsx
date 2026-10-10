const RoughExperiment=()=>{

   
   const sandwich=()=>{
        const myInsideFunction=()=>{
            console.log("sandwich")
            }
        return myInsideFunction
    }

    const greet=()=>{
        const innerGreet=()=>{
        console.log("good Morning")
        }
        return innerGreet
    }
    const name=(name)=>{
        const innerName=()=>{
            console.log(name)
        }

        return innerName
    }
    return(
        <>    
        <button onClick={sandwich()}>sum</button>
        <button onClick={greet()}>greet</button>
        <button onClick={name("jane")}>name</button>
        

        </>
    )
}
export default RoughExperiment

//    const greet=()=>{

     //   return console.log("hello beautiful...")

//} dont work
    