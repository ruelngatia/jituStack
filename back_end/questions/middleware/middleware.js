const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')

const verifyToken = async(req,res,next)=>{


    let token = req.headers['authorization']
    token = token?.split(' ')[1]
    jwt.verify(token,process.env.SECRET,(err,content)=>{
        if(err) return res.status(401).send({message:'jwt error'})
        req.body.user_id = content
        next()
    })
   

}



module.exports = {
    verifyToken,
}