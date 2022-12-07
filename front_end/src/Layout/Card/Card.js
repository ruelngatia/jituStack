import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionDetails from '../../Components/QuestionDetails/QuestionDetails'
import User from '../../Components/User/User'
import LanguageList from '../LanguageList/LanguageList'
import './Card.css'

export default function Card() {

  const navigator = useNavigate()

  return (
    <div className='card'>
        <div className='inner-card'>
            <User/>
            <span className='question-title' onClick={()=>navigator('/answers')}>
                How plave div in the middle css only
            </span>
            <p>
                I need help to prepare a server which can
                deliver below possible use cases in a 5G Lab.
                Visualization – 
                Accelerators enhance performance for 3D 
                visualization applications such as computer-aided design,
                enabling software to draw models in real time as the user moves ......
            </p>
            <LanguageList/>
        </div>
        <QuestionDetails/>
    </div>
  )
}
