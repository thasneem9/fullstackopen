const RoughExperiment=()=>{
const obj={
    name:"Robot simon",
    age:1000,
    greetPeople:function(){
        console.log("hello there, ",this.name)
    },
    sum:function(a,b){
        console.log(a+b)
    }

}
obj.greetPeople()
const referenceObj=obj.greetPeople
 /*
 *referenceObj()-----------------This ref obj cant acces this.name 
 *HENCE "this" can act weirdly in scenarios like using timeout, or using referenceObjects to call fucntions
 * 
 * When calling the method through a reference, the method loses knowledge of what the original this was. 
 * Contrary to other languages, in JavaScript the value of this is defined based on how the method is called.
 *  When calling the method through a reference, the value of this becomes the so-called global object
 *  and the end result is often not what the software developer had originally intended.
 */







    return(
        <>    
        </>
    )
}
export default RoughExperiment