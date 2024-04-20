require('dotenv').config()
let express = require('express');
let app = express();
let path = require('path')
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
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
app.get('/now', function(req, res, next){
    req.time = new Date() .toString()
    next()
},function(req, res){
    res.json({
        time:req.time
    })
}
)
app.get('/:word/echo', (req, res)=>{
    res.json({
        echo: req.params.word
    })
})
app.route('/name')
    .get((req, res)=>{
       res.json({
            name:req.query.first+ " "+req.query.last
        })
    })
    .post((req, res)=>{
        first = req.body.first
        last = req.body.last
        res.json({
            name: first+ " "+last

        })
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
