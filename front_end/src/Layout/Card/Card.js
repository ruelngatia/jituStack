import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionDetails from '../../Components/QuestionDetails/QuestionDetails'
import User from '../../Components/User/User'
import LanguageList from '../LanguageList/LanguageList'
import './Card.css'

export default function Card(props) {

  const navigator = useNavigate()
  let question = props.question
  const details = {
    likes: 1,
    answers: question.answerCount,
    views: question.viewCount
  }
  const user = {
    username: question.username,
    image_url : question.profile_image,
    asked: Date(question.date_asked)
  }

  return (
    <div className='card'>
        <div className='inner-card'>
            <User userProfile={user}/>
            <span className='question-title' onClick={()=>navigator('/answers')}>
                {question.question_title}
            </span>
            <p dangerouslySetInnerHTML={{__html:question.question}}/>
            <LanguageList/>
        </div>
        <QuestionDetails details={details}/>
    </div>
  )
}
