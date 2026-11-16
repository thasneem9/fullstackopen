import express from 'express'
import persons from './persons.js'
const app=express()

app.get('/',(request,response)=>{
response.send(persons)
})

app.listen(3001,()=>{
      console.log("app listening on port 3001")
})


console.log("hi")
