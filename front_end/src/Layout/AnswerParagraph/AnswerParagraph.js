import React from 'react'
import './AnswerParagraph.css'

export default function AnswerParagraph(props) {

  return (
    <div className='answer-p' >
       <div className='inner' dangerouslySetInnerHTML={{__html:props.answer}}>
       </div>
       
    </div>
  )
}
