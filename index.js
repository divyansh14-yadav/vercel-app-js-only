const express =require('express')

const index = express();

index.post('/post',(req,res)=>{
    res.send("hello")
})

index.listen(3000)

console.log("coneected");