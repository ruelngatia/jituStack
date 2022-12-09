const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const {authRouter} = require('./routes/routes')

const app = express()
app.use(express.json())

app.use('/users',authRouter)


app.listen(process.env.PORT || 5050,()=>{
    console.log('Auth services running ......');
})