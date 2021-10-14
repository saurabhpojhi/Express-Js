
// How to serve HTML and JSON data using Express JS ? 
// You can send the JSON response by using res.json() method. 
// It accepts an object and converts it into JSON before 
// sending it as a response.


const express = require('express');
const app =express();
const port = 3000;

app.get('/', (req, res)=>{
    res.write("<h1> welcome to my page </h1>");
    res.write("<h1> welcome to again my page </h1>");
    res.send();
});

app.get('/about', (req, res)=>{
    res.status(200).send(" welcome to my about page ");
});

app.get('/contact', (req, res)=>{
    res.send(" welcome to my  contact page ");
});

// app.get('/temp', (req, res)=>{
//     res.send([
//         {
//         id :1,
//         name: " saurabh",
//     },
//     {
//         id :1,
//         name: " saurabh",
//     },
//     {
//         id :1,
//         name: " saurabh",
//     }
// ]);
// });

app.get('/temp', (req, res)=>{
    res.json([
        {
        id :1,
        name: " saurabh",
    },
    {
        id :1,
        name: " saurabh",
    },
    {
        id :1,
        name: " saurabh",
    }
]);
});


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});