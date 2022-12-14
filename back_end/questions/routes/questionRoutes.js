const {Router} = require('express')
const questionRouter = Router()
const {
    getAllQuestions,
    addQuestion,
    getQuestion,
    deleteQuestion,
    addAnswer,
    addLike,
    addDislike,
    searchQuestion,
    addComment,
    getUserQuestion,
    mostlyAnsweredQuestion,
    preferedAnswer,
    getAnswersForQuestion
} = require('../controller/controller')
const {verifyToken} = require('../middleware/middleware')

questionRouter.get('/',verifyToken,getAllQuestions)
questionRouter.get('/mostlyanswered',verifyToken,mostlyAnsweredQuestion)
questionRouter.get('/:question',verifyToken,getQuestion)
questionRouter.post('/addquestion',verifyToken,addQuestion)
questionRouter.delete('/deletequestion/:id',verifyToken,deleteQuestion)
questionRouter.post('/addanswer',verifyToken,addAnswer)
questionRouter.post('/addlike',verifyToken,addLike)
questionRouter.post('/adddislike',verifyToken,addDislike)
questionRouter.get('/search/:question',verifyToken,searchQuestion)
questionRouter.post('/addcomment',verifyToken,addComment)
questionRouter.get('/getmyquestion/:id',verifyToken,getUserQuestion)
questionRouter.patch('/setPreferedanswer',verifyToken,preferedAnswer)
questionRouter.get('/answers/:question_id',verifyToken,getAnswersForQuestion)


module.exports = {
    questionRouter
}