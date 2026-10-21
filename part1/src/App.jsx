import {useState}from 'react'

const App=()=>{
const [good,setGood]=useState(0)
const [total,setTotal]=useState(0)
const [avg,setAvg]=useState(0)
const handleGood=()=>{
    setGood(good+1)
            setTotal(total+1)
                        
                                        setAvg(avgValue+1)

                                                            console.log(good)
0
                                                                                }

                                                                                                    return( 
                                                                                                                        <> 
                                                                                                                                            <h1>course feeback</h1>
                                                                                                                                                                <button onClick={handleGood}>good</button>
                                                                                                                                                                                    <p>avg score: {avg/total*100}</p>
                                                                                                                                                                                                        </>
                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                            }