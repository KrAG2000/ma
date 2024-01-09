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

mongoose.connect(`mongodb+srv://agni5kartik:K12Entre@cluster0.caiqbmp.mongodb.net/`)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('server running  on ',process.env.PORT);
    })
})
.catch((error)=>{
console.log(error);
})



