
const express = require('express');
const mongooes=require('mongoose');
const cors=require('cors');
const NameModel=require('./Model/name')

//create an express application

const app=express();

//middleware to handle cors json

app.use(cors());
app.use(express.json());

//connect  to mongodb
mongooes.connect('mongodb://localhost:27017/nameapp')
.then(()=>
console.log('connected to mongodb'))
.catch((error)=>
console.error("mongodb connection error:",error));
   


//server

app.get('/get',(req,res)=>
    {
       NameModel.find()
       .then(result=>res.json(result))
       .catch(err=>res.json(err))
    })
   
        
app.post('/add',(req,res)=>
{
    const name=req.body.name;
   NameModel.create(
    { name: name}
   )
})
app.get('/', (req, res) => {
        res.send('Backend server is running');
    });
    
app.listen(3001,()=>
{
    console.log("Backend sderver running");
});

