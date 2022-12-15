const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const {authRouter} = require('./routes/routes')
const app = express()

dotenv.config()
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

app.use('/users',authRouter)


app.listen(process.env.PORT || 5050,()=>{
    console.log('Auth services running ......');
})