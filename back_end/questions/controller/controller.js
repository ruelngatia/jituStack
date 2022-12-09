const {exec, query} = require('../dbHelper/dbHelper')


const getAllQuestions = async(req,res)=>{

    let result = await (await exec('get_all_questions')).recordset
    res.status(200).send(result)

}

const addQuestion = async(req,res)=>{
    try {
        await exec('addQuestion',req.body)
        res.status(201).send({message:'queston added'})
    } catch (error) {
        res.status(400).send({message:'queston was not added'})
    }
}

const getQuestion = async(req,res)=>{
    try {
        let {question} = req.params
        let result = await (await exec('get_question',{question_id: question})).recordset[0]
        res.status(200).send(result)
    } catch (error) {
        res.status(404).send({message:"question doesn't exist"})
    }
}

const deleteQuestion = async(req,res)=>{
    try {
        let {id} = req.params
        await exec('delete_question',{question_id: id})
        res.status(201).send({message: "question deleted"})

    } catch (error) {
        res.status(404).send({message: "no such question was deleted"})
        console.log(error);
    }
}


const addAnswer = async(req,res)=>{

    try{
        await exec('addAnswer',req.body)
        res.status(201).send({message: "answer added"})
    } catch (errer){
        res.status(401).send({message: "answer was not added"})
    }

}



module.exports = {
    getAllQuestions,
    addQuestion,
    getQuestion,
    deleteQuestion,
    addAnswer
}