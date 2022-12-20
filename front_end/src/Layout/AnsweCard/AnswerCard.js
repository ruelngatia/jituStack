import {React, useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import Comment from '../../Components/Comment/Comment'
import CommentInput from '../../Components/CommentInput/CommentInput'
import Likes from '../../Components/Likes/Likes'
import AnswerParagraph from '../AnswerParagraph/AnswerParagraph'
import TinyMCE from '../../Components/TinyMCE/TinyMCE'
import './AnswerCard.css'
import axios from 'axios'
import { getAnswers } from '../../redux/answerSlice'
import { toast } from 'react-toastify';

export default function AnswerCard(props) {

  const answers = useSelector((state)=> state.answers)
  const [hideComent, setHideComent] = useState(true)
  const dispatch = useDispatch()

  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

  const notifyAnswerSuccess = () => toast.success("Answer added",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }); 
  const notifyAnswerFail = () => toast.error("Answer was not added",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}); 

  const inputHandler = async(input)=>{
    console.log(answers.question.questions_id);
    axios.post('http://localhost:4040/addanswer',{
      question_id: answers.question.questions_id,
      answer: input
    },config).then((value)=>{
      notifyAnswerSuccess()
      dispatch(getAnswers(answers.question.questions_id))
    }).catch((err)=>{
      notifyAnswerFail()
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
                  <Likes likes={answer.like} existinglike={answer.existinglike} answer_id={answer.answer_id} question_id={answers.question.questions_id}/>
                </div>
                <br/>
                <p id='comment' onClick={()=>{setHideComent(!hideComent)}}>Comments :</p>

                  <div className={`show-comments ${hideComent?'hideComponent':''}`} >
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
