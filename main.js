const express = require("express");
const app =express();
  const port =3000;
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/users",(req,res)=>{
    res.send("user data acced");
})

// app.get("/users/:Id",(req,res)=>{
//    // console.log(req.params);
//    if(req.params.Id == undefined){
//     res.send(" all user data acced");
//    }
//    else
//    res.send("user data acced"+req.params.Id);
// })

app.get("/flights/:From-:To",(req,res)=>{
     console.log(req.params);
    
    res.send("search flight "+ "From:" + req.params.From+" To"+req.params.To);
 })


app.post("/users/profile",(req,res)=>{
    res.send("user data acced");
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
