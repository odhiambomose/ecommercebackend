const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const userRoutes=require("./routes/user")
const productRoutes=require("./routes/Product")
const authRoutes=require("./routes/auth")
const cartRoutes=require("./routes/Cart")
const orderRoutes=require("./routes/Order")
const res = require("express/lib/response")

const app=express()
const PORT=5000||process.env.PORT


dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log("DB connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})
app.use(express.json())
app.use("/api/user",userRoutes)

app.use("/api/product/",productRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/Cart",cartRoutes)
app.use("/api/Order",orderRoutes)


