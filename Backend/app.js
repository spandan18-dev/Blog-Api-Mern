import express from 'express'
import dotenv from 'dotenv' ; dotenv.config()
import debug from 'debug'
const app = express()

// Middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes 
import router from './routes/posts.route.js'
app.use("/api",router)

// Db Connection 
import connectDB from './config/db.js'
connectDB(process.env.MONGODB_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        const applog = debug("development:app")
        applog(`server up ! http://localhost:${process.env.PORT}`)
    })
})