
import './notification.css'
const Notification=({message,type})=>{
console.log("notf type:",type)
    return(<>
        <p className={type==='success'?'success':'error'}>{message}</p>

    </>)
}
export default Notification