const express = require("express");
const app =express();
  const port =3000;
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/users",(req,res)=>{
    res.send("user data acced");
})
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
