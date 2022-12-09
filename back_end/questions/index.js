const express = require('express')
const dotenv = require('dotenv')
const {questionRouter} = require('./routes/questionRoutes')


const app = express()
dotenv.config()

app.use(express.json())
app.use('/',questionRouter)


app.listen(process.env.port || 4040,()=>{
    console.log('app started  on......');
})