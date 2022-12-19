import {React, useState} from 'react'
import { useSelector } from 'react-redux'
import Comment from '../../Components/Comment/Comment'
import CommentInput from '../../Components/CommentInput/CommentInput'
import Likes from '../../Components/Likes/Likes'
import AnswerParagraph from '../AnswerParagraph/AnswerParagraph'
import TinyMCE from '../../Components/TinyMCE/TinyMCE'
import './AnswerCard.css'
import axios from 'axios'

export default function AnswerCard(props) {

  const answers = useSelector((state)=> state.answers)
  const [hideComent, setHideComent] = useState(true)

  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

  const inputHandler = async(input)=>{
    axios.post('http://localhost:4040/addanswer',{
      question_id: answers.question.questions_id,
      answer: input
    },config).then((value)=>{

    }).catch((err)=>{
      
    })
  }

  
  return (
    <div className='answer-card'>
        <div className='question-title'>
            <h3>{answers.question.question_title}</h3>
        </div>
        <div className='question' dangerouslySetInnerHTML={{__html:answers.question.question}}/>

        {
          answers.answersList.map((answer)=>{
            return (
              <div className='answers' key={Math.random()}>
      
                <div>
                    <AnswerParagraph answer={answer.answer}/>
                </div>
                <div className='div-likes'>
                  <Likes likes={answer.like}/>
                </div>
                <br/>
                <p id='comment' onClick={()=>{setHideComent(!hideComent)}}>Comments :</p>
                <div className='show-comments' style={hideComent?{'display':'none'}:{}}>
                  {answer.comments.map((comment)=>{
                    return <Comment  comment={comment}/>
                  })}
                </div>
                
                <CommentInput answer_id = {answer.answer_id}/>
          </div>
            )
          }
          )
        }
        <span>Your Answer: </span>
        <TinyMCE input={inputHandler}/>
    </div>
  )
}
