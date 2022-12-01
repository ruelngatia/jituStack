import React from 'react'
import './QuestionDetails.css'

export default function QuestionDetails() {
  return (
    <div className='question-details'>
        <div>
            <span>14</span>
            <span className='smaller-text'>Likes</span>
        </div>
        <div>
            <span>174</span>
            <span className='smaller-text'>Answes</span>
        </div>
        <div>
            <span>115</span>
            <span className='smaller-text'>View</span>
        </div>
    </div>
  )
}
