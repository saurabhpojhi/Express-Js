const express = require("express");
const app = express();

//console.log(app);
const port = 3000;
app.get("/user", (req,res)=>{
res/send("hello world");
})
app.listen(300,()=>console.log(`sever runnig on ${port}`));


