import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import QuestionDetails from '../../Components/QuestionDetails/QuestionDetails'
import User from '../../Components/User/User'
import LanguageList from '../LanguageList/LanguageList'
import './Card.css'
import { getAnswers } from '../../redux/answerSlice'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

export default function Card(props) {
  const timeAgo = new TimeAgo('en-US')
  const navigator = useNavigate()
  const dispatch = useDispatch()
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
  

    


  return (
    <div className='card'>
        <div className='inner-card'>
            <User userProfile={user}/>
            <span className='question-title' onClick={()=>{
              navigator('/answers')
              dispatch(getAnswers(question.questions_id))
            }}>
                {question.question_title}
            </span>
            <p dangerouslySetInnerHTML={{__html:question.question}}/>
            <LanguageList/>
        </div>
        <QuestionDetails details={details}/>
    </div>
  )
}
