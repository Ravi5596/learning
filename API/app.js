const express = require('express');
const app = express();
const studentroute = require('./api/routes/student');
const facultyroute  = require('./api/routes/faculty'); 
const userRoute = require('./api/routes/user');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://rsm:ravi123@rsm.rtqog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('succesful connection');
})


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentroute)
app.use('/faculty',facultyroute)
app.use('/user',userRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

module.exports=app