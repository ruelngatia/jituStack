import React from 'react'
import Comment from '../../Components/Comment/Comment'
import CommentInput from '../../Components/CommentInput/CommentInput'
import Likes from '../../Components/Likes/Likes'
import AnswerParagraph from '../AnswerParagraph/AnswerParagraph'
import './AnswerCard.css'

export default function AnswerCard() {
  return (
    <div className='answer-card'>
        <div className='question-title'>
            <h3>PL/SQL MERGE INTO Compilation Errors</h3>
            {/* <span>Accepted</span> */}
        </div>
        <div className='answers'>
          <div>
              <AnswerParagraph/>
          </div>
          <div className='div-likes'>
            <Likes/>
          </div>
          <br/>
          <p>Comments :</p>
          <Comment/>
          <CommentInput/>
        </div>
        <span>Your Answer</span>
    </div>
  )
}
