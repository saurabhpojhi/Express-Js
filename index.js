const express = require('express')
const path = require("path");
const app = express()
const port = 4000;

app.get('/', (req, res) =>{
    console.log(path.join(__dirname + "./index.html"));
    res.sendFile(path.join(__dirname + "./index.html"));
})

app.get('/about', (req, res) =>{
    res.send(' about')
})

app.post("/", (req,res)=>{
    const userName= req.body.name;
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})