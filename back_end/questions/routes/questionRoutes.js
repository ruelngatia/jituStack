const {Router} = require('express')
const questionRouter = Router()
const {getAllQuestions,addQuestion,getQuestion,deleteQuestion,addAnswer} = require('../controller/controller')
const {verifyToken} = require('../middleware/middleware')

questionRouter.get('/',verifyToken,getAllQuestions)
questionRouter.get('/:question',verifyToken,getQuestion)
questionRouter.post('/addquestion',verifyToken,addQuestion)
questionRouter.delete('/deletequestion/:id',verifyToken,deleteQuestion)
questionRouter.post('/addanswer',verifyToken,addAnswer)

module.exports = {
    questionRouter
}