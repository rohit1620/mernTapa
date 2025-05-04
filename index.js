const dotenv=require("dotenv")
const express=require("express");
// const mongoose=require("mongoose")

const app=express();


dotenv.config({path:'./config.env'});
require('./db/cone');


app.use(express.json())
app.use(require("./router/auth"))

const middleware=(req,res,next)=>{
   console.log("middleware");
   next()
}
 
app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.get("/about",middleware,(req,res)=>{
    res.send("This is About Page")
})

app.get("/contact",(req,res)=>{
    res.send("This is Contact Page")
})

app.listen(process.env.PORT,()=>{
    console.log("project running on port 4500");
    
})
