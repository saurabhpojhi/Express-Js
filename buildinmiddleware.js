
const path = require('path')
const express = require('express')
const app = express()

// here use abolute path 
console.log(path.join(__dirname, ".."));
// build in middle

app.use(express.static(staticpath));

app.get('/', (req, res) =>{
    res.send(' Hello world')
})

app.get('/about', (req, res) =>{
    res.send(' about')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})