const History=(props)=>{
    if (props.clickList.length==0){
        return(
            <>
            <h1>add letters to create necklace</h1>
            </>
        )}
    else{
        return(
            <>
            <h1>history necklace: {props.clickList}</h1>
            <h1>history necklace separated by ~: {props.clickList.join('~')}</h1>
            </>
        )}


}
export default History

