const {Router} = require('express')
const authRouter = Router()
const {addUser,loginUser} = require('../controller/controller')



authRouter.post('/adduser',addUser)
authRouter.post('/login',loginUser)


module.exports = {
    authRouter
}