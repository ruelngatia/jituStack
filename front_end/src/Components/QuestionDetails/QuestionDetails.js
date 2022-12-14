import React from 'react'
import './QuestionDetails.css'

export default function QuestionDetails(props) {
  const details = props.details
  return (
    <div className='question-details'>
        <div>
            <span>{}</span>
            <span className='smaller-text'></span>
        </div>
        <div>
            <span>{details.answers || 0}</span>
            <span className='smaller-text'> Answers</span>
        </div>
        <div>
            <span>{details.views}</span>
            <span className='smaller-text'> View</span>
        </div>
    </div>
  )
}
