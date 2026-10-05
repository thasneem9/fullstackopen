import ReactDOM from 'react-dom/client'

import App from './App'
/* 
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
*/

const root=ReactDOM.createRoot(document.getElementById('root'))
let count=10
const txt="Refresh to re-render App hence update count"
const final="HAPPY BIRTHDAY"
const updateCounterAndCallRoot=()=>{
    root.render(<App text={txt}count={count} final={final}/>)
}
updateCounterAndCallRoot()
count-=1
updateCounterAndCallRoot()
count-=1
updateCounterAndCallRoot()
count-=1
updateCounterAndCallRoot()
count-=1
updateCounterAndCallRoot()

