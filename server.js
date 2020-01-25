const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')

//2 Middleware
app.use(express.json())

//3 connect db
connectDB()

// 4 routes
app.use("/contacts",require("./routes/contacts"))

//1 run server
const port=process.env.PORT || 5000
app.listen(port, err => err ? console.log('cannot connect to database'):console.log(`server is running on ${port}`))

