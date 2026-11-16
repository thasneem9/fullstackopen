
import express from 'express'

const app=express()
app.use(express.json())

const notes=[
    {
        'id':0,
        'content':'green',
        'imp':true

    },
    {   'id':1,
        'content':'blue',
        'imp':false

    },
    {   'id':2,
        'content':'yellow',
        'imp':true

    },
     {   'id':3,
        'content':'orange',
        'imp':false

    }
]
app.get('/',(request,response)=>{
    response.send('<p>main page</p>')
})

app.get('/api/notes',(request,response)=>{
    response.send(notes)
})
app.get('/api/notes/:idx',(request,response)=>{
   const id=request.params.idx
   const note=notes.find(n=>n.id==id)
   response.send(`<p>note: ${note?.content}</p>`)
})

app.post('/api/notes',(request,response)=>{
    const newNote=request.body
    console.log("newNote:",newNote)
    //creating new ID manually (not recommended but for fun)
    //find max id and then add 1
    const idList=notes.map(n=>n.id)
    console.log("idList",idList)
    const maxId=Math.max(...idList)
    console.log("maxId:",maxId)

    newNote.id=maxId+1

    const updatedNotes=[...notes,newNote]



    //making sure body is not empty/udef/null
    if(!newNote.content){
        response.status(400).json({'error':'content missing'})
    }else{
         response.send(updatedNotes)
    }

})
app.delete('/api/notes/:id',(request,response)=>{
    const id=request.params.id
    const filteredNotes=notes.filter(n=>n.id!=id)

    response.send(filteredNotes)
})

const PORT=3001
app.listen(PORT,()=>{
      console.log(`Server running on port ${PORT}`)
})