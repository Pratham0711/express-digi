import express from 'express'

const port = 3002

const app = express()
/*app.get('/', (req, res) =>{
    res.send("Hello, From Pratham And Enjoy")
})

app.get('/icetea', (req, res) =>{
    res.send("Hello, Enjoy your icetea")
})

app.get('/twitter', (req, res) =>{
    res.send("Hello, welcome totwitter.com")
})*/
//to take the data fro array
app.use(express.json())

// make the array to stre the data
let teaData = []
let nextId = 1


app.post('/teas', (req, res) =>{

  const {name, price} = req.body      //parameter given by the express as extract the data  
 const newTea = {id:nextId++, name, price}
 teaData.push(newTea)
 res.status(201).send(newTea)
})

app.get('/teas', (req, res) =>{
    res.status(201).send(teaData)
})
//getting the dat y id
app.get('/teas/:id', (req, res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id)) // any things thatcome under the url its obtain or called   by params specify the domain
    if (!tea) {
        return res.status(404).send("Tea not found")    
    }
    res.status(200).send(tea)
})
//update the  tea

app.put('/teas',(req,res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send("Tea not found")    
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)
})
 //delete tea

 app.delete('/teas',(req, res)=>{
    const index = teaData.findIndex(t => t.id === parent(req.params.id))
    if (index === -1) {
        res.status(404).send("not found the tea")
    }
        teaData.slice(index, 1)
        return res.status(204).send('deleted')
        
    
 }) 

app.listen(port, ()=>{
    console.log(`Server is running on the port number ${port}...`)
})
