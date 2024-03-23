import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { error } from "console"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import cors from "cors"



dotenv.config()
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("onnected to mongo db")
    })
    .catch((err)=>{
        console.log(err)
    })
    

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message =  err.message || "internal server error"

    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })


})

app.listen(4000,()=>{
    console.log("this is running on 4000 ")
})