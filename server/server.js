import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ||5000;

const app = express();

app.get('/',(req,res)=>{
    res.send({message:"Server is ready"})
})

app.listen(PORT,()=>{
    console.log("server started " + PORT)
})