const {exec} = require('../dbHelper/dbHelper')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const saltRounds = 10;

const addUser = async(req,res)=>{
    
   try {
    let {username, email,password} = req.body
    const passwordHash =  await bcrypt.hash(password,saltRounds)
    await exec('addUser',{username, email, password:passwordHash})
    res.status(201).send({message:`new user created ${passwordHash}`})
   } catch (e) {
    res.status(401).send({message: 'user already exist'})
   }
    

}


const loginUser = async(req,res)=>{

    try {
        let {username,password} = req.body
        let result = await (await exec('loginUser',{username})).recordset[0]
        bcrypt.compare(password,result.password,(err,Bresult)=>{
            if(Bresult){
                let token = jwt.sign(username,process.env.SECRET)
                return res.status(200).send({
                    message: "Login succesful",
                    token: token,
                    id : result.user_id
                })
            }else{
                return res.status(401).send({message:"login failed"})
            }
        })     
    } catch (error) {
        res.status(401).send({message:"user don't exist"})
    }
}


module.exports = {
    addUser,
    loginUser
}