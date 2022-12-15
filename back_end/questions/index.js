const express = require('express')
const dotenv = require('dotenv')
const {questionRouter} = require('./routes/questionRoutes')
const cors = require('cors')



const app = express()
dotenv.config()

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use('/',questionRouter)


app.listen(process.env.port || 4040,()=>{
    console.log('app started  on......');
})