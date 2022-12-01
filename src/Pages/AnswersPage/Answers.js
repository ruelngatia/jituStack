import React from 'react'
import TinyMCE from '../../Components/TinyMCE/TinyMCE'
import AnswerCard from '../../Layout/AnsweCard/AnswerCard'
import  './Answers.css'

export default function Answers() {
  return (
    <div className='answers'>
        <AnswerCard/>
        <TinyMCE/>
    </div>
  )
}
