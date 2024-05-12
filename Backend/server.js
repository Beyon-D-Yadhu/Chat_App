import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";
dotenv.config()
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/',(req,res)=>{
    res.send("heelllloo world...")
})

app.get('/api/chat',(req,res)=>{
    
    res.json({message:"Heello worlddddd"})
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

