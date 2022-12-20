const {exec, query} = require('../dbHelper/dbHelper')


const getAllQuestions = async(req,res)=>{

    try {
        let result = await (await exec('get_all_questions')).recordset
        if(result.length === 0)return res.status(404).send({message: 'no questions found'})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})
    }

}

const addQuestion = async(req,res)=>{
    try {
        let returnedValue = await (await exec('addQuestion',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message:'queston was  not added'})
        res.status(201).send({message:'queston added'})
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})
    }
}

const getQuestion = async(req,res)=>{
    try {
        let {question} = req.params
        let result = await (await exec('get_question',{question_id: question})).recordset[0]
        if(result === undefined) return res.status(404).send({message:"question doesn't exist"})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})
    }
}

const deleteQuestion = async(req,res)=>{
    try {
        let {id} = req.params
        let returnedValue = await (await exec('delete_question',{question_id: id})).returnValue
        if(returnedValue != 0) return res.status(401).send({message: "no such question was deleted"})
        res.status(201).send({message: "question deleted"})
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})
    }
}


const addAnswer = async(req,res)=>{

    try{
        let returnedValue = await (await exec('addAnswer',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message: "answer was not added"})
        res.status(201).send({message: "answer added"})
    } catch (errer){
        res.status(500).send({message: 'internal sever error'})   
    }

}

const addLike = async(req,res)=>{
    try {
        let returnedValue = await (await exec('addlike',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message: "like was not added"})
        res.status(201).send({message: "like was added succefully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal sever error'})  
    }
}

const addDislike = async(req,res)=>{
    try {
        let returnedValue = await (await exec('add_dislike',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message: "dislike was not added"})
        res.status(201).send({message: "dislike was added succefully"})
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})        
    }
}

const searchQuestion = async(req,res)=>{
    try {
        let {question} = req.query
        let results = await (await exec('search_question',{question: question})).recordset
        if(results.length == 0) return res.status(404).send({message: "no such question was found"})
        res.status(201).send(results)
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal sever error'})   
    }
}

const addComment = async(req,res)=>{
    try {
        let returnedValue = await (await exec('addComment',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message: "comment was not added"})
        res.status(201).send({message: "comment added"})
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})   
    }
}


const getUserQuestion = async(req,res)=>{
    try {
        let {id} = req.params
        let result = await (await exec('get_asked_question_by',{user_id: id})).recordset
        if(result.length == 0) return  res.status(401).send({message: "no questions asked"})
        res.status(201).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal sever error'})   
    }
}

const mostlyAnsweredQuestion = async(req,res)=>{
    try {
        let result = await (await exec('frequently_answered_question')).recordset
        if(result.length == 0) return res.status(401).send({message: "no mostly answered questions"})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})  
    }
}



const preferedAnswer = async(req,res)=>{
    try{
        let returnedValue = await (await exec('set_prefered_answer',req.body)).returnValue
        if(returnedValue != 0) return res.status(401).send({message: 'preffered answer was not set'})
        res.status(200).send({message: "prefered answer"})
    }catch(error){
        res.status(500).send({message: 'internal sever error'}) 
    }
}

const getAnswersForQuestion = async(req,res)=>{
    try {
        const {question_id} = req.params
        let result = await (await exec('getAnswersToQuestion',{question_id: question_id})).recordset
        let question = await (await exec('get_question',{question_id: question_id})).recordset[0]

       result = Promise.all(
        result.map(async(ans)=>{
            let likes = await (await exec('getLikesForAns',{answer_id: ans.answer_id})).recordset
            let like = likes[2]?.ctn || 0
            let dislike = likes[1]?.ctn || 0
            
            let comments =await (await exec('getComments',{answer_id:ans.answer_id})).recordset
            let{user_id} = req.body
            let existinglike = await (await exec('checkMyLike',{user_id,answer_id:ans.answer_id})).recordset[0]


            ans = {...ans,like:{like,dislike},existinglike: existinglike.likeValue,comments: comments}
            return ans
        })
       )
       result = {question, answers: await result}
         
        
        if(result.length == 0) return res.status(404).send({message: 'answers do not exist'})
        res.status(200).send(await result)
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'internal sever error'}) 
    }
}


const tabController = async(req,res)=>{
    try {
        let {tab} = req.query
        let result;

        switch (tab) {
            case 'mostlyanswered':
                result = await (await exec('frequently_answered_question')).recordset
                if(result.length < 1) return res.status(404).send({message:{message: 'empty frequent results'}})
                res.status(200).send(result)
            break;
            case 'myquestions':
                let {id} = req.params
                result = await (await exec('get_asked_question_by',{user_id: id})).recordset
                if(result.length < 1) return res.status(404).send({message:{message: 'empty frequent results'}})
                res.status(200).send(result)
            break;
            case 'newest':
                result = await(await (exec('getNewesQuestion'))).recordset
                if(result.length < 1) return res.status(404).send({message:{message: 'empty frequent results'}})
                res.status(200).send(result)
            break;
            case 'featured':
                result = await (await exec('get_featured_questions',req.body)).recordset
                if(result.length < 1) return res.status(404).send({message:{message: 'empty frequent results'}})
                res.status(200).send(result)
            break;
        
            default:
                break;
        }

        res.status(200).send([])
    } catch (error) {
        console.log(error);
    }
}

const addView = async(req,res)=>{

    try {
        let returnValue = await (await exec('add_question_view',req.body)).returnValue
        if(returnValue !== 0) return res.status(401).send({message: 'view was not added'}) 
        res.status(201).send({message: 'view was added'})
        
    } catch (error) {
        res.status(500).send({message: 'internal sever error'})
    }
}


module.exports = {
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
    getAnswersForQuestion,
    tabController,
    addView
}