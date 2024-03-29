const env =require('dotenv').config()
const express = require('express');
const workrouters = require('./routers/workouts');
const mongoose = require ('mongoose');
const app = express();


//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})


app.use('/',workrouters)

mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('server running  on ',process.env.PORT);
    })
})
.catch((error)=>{
console.log(error);
})



