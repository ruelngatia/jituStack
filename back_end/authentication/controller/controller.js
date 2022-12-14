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
    console.log(e)
    res.status(401).send({message: 'user already exist'})
   }
    

}


const loginUser = async(req,res)=>{

    try {
        let {username,password} = req.body
        let result = await (await exec('loginUser',{username})).recordset[0]
        if(result === undefined) return res.status(404).send({message: 'wrong username or password'})
        bcrypt.compare(password,result.password,(err,Bresult)=>{
            if(Bresult){
                let token = jwt.sign(result.user_id,process.env.SECRET)
                return res.status(200).send({
                    token: token,
                    username : username,
                    image_url: result.profile_image
                })
            }else{
                return res.status(401).send({message:"wrong username or password"})
            }
        })     
    } catch (error) {
        res.status(500).send({message:"internal sever error"})
    }
}


module.exports = {
    addUser,
    loginUser
}