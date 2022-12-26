const express = require('express')
const app = express()
let ejs = require('ejs');
const port = 9000 || process.env.PORT;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{
        data : 'data (server.js)'
    })
})

app.listen(port,()=>{
    console.log('====================================');
    console.log('server started');
    console.log('====================================');
}) 
