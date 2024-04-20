require('dotenv').config()
let express = require('express');
let app = express();
let path = require('path')
/*
console.log("Hello World")
app.get('/',(req, res)=>{
    res.send("Hello Express")
})
*/
app.use(function middleware(req, res, next){
    console.log(req.method+" "+req.path+ " -"+req.ip)
    next()
})
app.use("/public", express.static(__dirname + "/public"));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})
app.get('/json',(req, res)=>{
    const cs = process.env.MESSAGE_STYLE
    if(cs =="uppercase")
    response = "Hello json".toUpperCase()
    else
    response  = "Hello json"
    res.status(200).json({
        message : response
    })
})


































 module.exports = app;
