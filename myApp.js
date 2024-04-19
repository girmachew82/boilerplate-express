let express = require('express');
let app = express();
let path = require('path')
/*
console.log("Hello World")
app.get('/',(req, res)=>{
    res.send("Hello Express")
})
*/
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'))
})



































 module.exports = app;
