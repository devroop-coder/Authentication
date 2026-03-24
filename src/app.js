const express = require('express');
const cookieParser = require('cookie-parser');

const app =express();
app.use(express.json());
const authRouter= require('./routes/auth.routes');
app.use('/api/auth',authRouter);
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.json({
        message:"Hi I am running"
    })

})

module.exports=app;