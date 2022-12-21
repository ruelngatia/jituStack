import {React, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import QuestionDetails from '../../Components/QuestionDetails/QuestionDetails'
import User from '../../Components/User/User'
import LanguageList from '../LanguageList/LanguageList'
import './Card.css'
import { getAnswers } from '../../redux/answerSlice'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import axios from 'axios'
import { MdOutlineMoreVert } from "react-icons/md";
import { toast } from 'react-toastify';
import { getAllQuestions } from '../../redux/questionsSlice'


TimeAgo.addDefaultLocale(en)

export default function Card(props) {
  const timeAgo = new TimeAgo('en-US')
  const navigator = useNavigate()
  const dispatch = useDispatch()

  const [showmenu, setShowmenu] = useState(false)
  let {pathname, search} = useLocation()

  const notifyfail = () => toast.error("question not deleted",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}); 

const notifySuccess = () => toast.success("question was deleted",{
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});

  let question = props.question
  const details = {
    likes: 1,
    answers: question.answerCount,
    views: question.viewCount
  }
  const user = {
    username: question.username,
    image_url : question.profile_image,
    asked: timeAgo.format(new Date(question.date_asked),'round')
  }
  
  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

  console.log(search);
  return (
    <div className='card'>
        <div className='inner-card'>
            <User userProfile={user}/>
            <span className='question-title' onClick={()=>{
              navigator(`/answers/${question.questions_id}`)
              dispatch(getAnswers(question.questions_id))
              axios.post('http://localhost:4040/addquestionview',{"question_id": question.questions_id
              },config)
                .then((v)=>{
                  console.log('added view');
                })
                .catch((err)=>{
                  console.log(err);
                })
            }}>
                {question.question_title}
            </span>
            <p dangerouslySetInnerHTML={{__html:question.question}}/>
            <LanguageList/>
        </div>
        <QuestionDetails details={details}/>
        

       {search==='?tab=myquestions'? <div className='del-menu'>
            <MdOutlineMoreVert onClick={()=>{setShowmenu(!showmenu)}}/>
            {showmenu?<ul>
              <li onClick={()=>{
                axios.delete(`http://localhost:4040/deletequestion/${question.questions_id}`,config)
                .then((v)=>{
                  notifySuccess()
                  dispatch(getAllQuestions('/tab/?tab=myquestions'))
                })
                .catch((e)=>{
                  notifyfail()
                })
              }}>Delete</li>
            </ul>:<></>}
        </div>:<></>}
    </div>
  )
}
