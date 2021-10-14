
// about - welcome to my about page
// contact - welcome to my about page
// temp - welcome to my temp page


const express = require('express');
const app =express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send(" welcome to my page ");
});

app.get('/about', (req, res)=>{
    res.status(200).send(" welcome to my about page ");
});

app.get('/contact', (req, res)=>{
    res.send(" welcome to my  contact page ");
});

app.get('/temp', (req, res)=>{
    res.send(" welcome to my  temprature page ");
});


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});