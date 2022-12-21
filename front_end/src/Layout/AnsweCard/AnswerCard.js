import {React, useState, useEffect} from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import Comment from '../../Components/Comment/Comment'
import CommentInput from '../../Components/CommentInput/CommentInput'
import Likes from '../../Components/Likes/Likes'
import AnswerParagraph from '../AnswerParagraph/AnswerParagraph'
import TinyMCE from '../../Components/TinyMCE/TinyMCE'
import './AnswerCard.css'
import axios from 'axios'
import { getAnswers } from '../../redux/answerSlice'
import { toast } from 'react-toastify';
import { MdOutlineMoreVert, MdCheck } from "react-icons/md";
import { useLocation } from 'react-router-dom'

export default function AnswerCard(props) {

  const answers = useSelector((state)=> state.answers)
  const [hideComent, setHideComent] = useState(false)
  const dispatch = useDispatch()
  const [showmenu, setShowmenu] = useState(false)

  const [showMenuIndex, setshowMenuIndex] = useState(0)
  const [showCommentIndex, setShowCommentIndex] = useState(0)

  let {pathname, search} = useLocation()

  useEffect(
    ()=>{
      dispatch(getAnswers(pathname.split("/")[2]))
    },[pathname, search]
  )

  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

  const notifyfail = () => toast.error("Was not markrd as prefered",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}); 

const notifySuccess = () => toast.success("Marked as prefered",{
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});

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

  const inputHandler = async(input,clear)=>{
    console.log(answers.question.questions_id);
    axios.post('http://localhost:4040/addanswer',{
      question_id: answers.question.questions_id,
      answer: input
    },config).then((value)=>{
      notifyAnswerSuccess()
      clear()
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
        <div>Answers:</div>
        {
          answers.answersList.map((answer)=>{
    
            return (
              <div className='answers' key={Math.random()}>
                <div className='verified-check'>
                  {answer.vote === true?<MdCheck size={20} color='green'/>:<></>}
                </div>
                <div>
                  <div className='mark-pref-menu'>
                    <MdOutlineMoreVert onClick={()=>{
                      setShowmenu(!showmenu)
                      setshowMenuIndex(answer.answer_id)
                    }}/>
                    {showmenu && showMenuIndex === answer.answer_id?<ul>
                      <li onClick={()=>{
                        axios.patch(`http://localhost:4040/setPreferedanswer`,{answer_id: answer.answer_id},config)
                        .then((v)=>{
                          notifySuccess()
                          dispatch(getAnswers(answers.question.questions_id))
                        })
                        .catch((e)=>{
                          notifyfail()
                        })
                      }}>Mark_prefered</li>
                    </ul>:<></>}
                  </div>
                  <div>
                      <AnswerParagraph answer={answer.answer}/>
                  </div>
                  <div className='div-likes'>
                    <Likes likes={answer.like} existinglike={answer.existinglike} answer_id={answer.answer_id} question_id={answers.question.questions_id}/>
                  </div>
                  <br/>
                  <p id='comment' onClick={()=>{
                    setHideComent(!hideComent)
                    setShowCommentIndex(answer.answer_id)
                    console.log(showCommentIndex);
                  }}>Comments :</p>
                    <div className={`show-comments `} >
                      
                    {answer.comments.map((comment)=>{
                      return <div className={`${hideComent ?'hideComponent':''}`}>
                        <Comment  comment={comment}/>
                        </div> 
                    })}
                  </div>
                  <CommentInput answer_id = {answer.answer_id}/>
                </div>
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
