import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import express from 'express';
const app = express() ;
import mongoose from 'mongoose' ;
import {Server} from 'socket.io' ;
import cors from 'cors' ;
import http from 'http' ;
const server = http.createServer(app) ;
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true, // optional — only if you’ll send cookies or tokens
  }));
const io = new Server(server , {cors : {
    origin : "http://localhost:5173/" ,
    methods : ["GET" , 'POST']
}})





mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to database'));
  
app.listen(8080 , ()=>{
    console.log("server running on port 8080");
})

app.get("/api/test" , (req,res)=>{
    res.json({ message : "path working (hello world)"})
})

  