import express from 'express'
import persons from './persons.js'
const app=express()
app.use(express.json())
app.get('/',(request,response)=>{
response.send(persons)
})
app.get('/info',(request,response)=>{
      response.send(`<h1>Phone Book has ${persons.length} Entries</h1>`)

})

app.get('/persons/:id',(request,response)=>{
      const id=request.params.id
      console.log("id:",id)
      const p=persons.filter(p=>p.id==id)
      console.log("p:",p)
      if(p.length==0){
            response.status(404).json({'error':'not found'})
      }
      response.send(p)

})

app.delete('/:id',(request,response)=>{
      const id=request.params.id
      console.log("id:",id)
      //reset persons
      const updatedNotes=persons.filter(p=>p.id!=id)

      console.log('updatedNotes:',updatedNotes)
      response.send(updatedNotes)
})
app.post('/persons',(request,response)=>{
      const newPerson=request.body
      const newId=Math.random()*10
      newPerson.id=newId
      const personExists=persons.find(p=>p.name==newPerson.name||p.number==newPerson.number)
      if(!newPerson.number || !newPerson.number){
            response.status(400).json({'error':'name numb cant be empty'})
      }else if(personExists){
            response.status(400).json({'error':'person already exists'})

      }else{
      console.log(newPerson)
      persons.push(newPerson)

      
      response.send(persons)
      }


})
app.listen(3001,()=>{
      console.log("app listening on port 3001")
})


console.log("hii")
