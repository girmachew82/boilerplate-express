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

app.use("/public", express.static(__dirname + "/public"));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})
app.get('/json',(req, res)=>{
    const cs = process.env.MESSAGE_STYLE
    res.status(200).json({
      message:"Hello json".cs
    })
})


































 module.exports = app;
