import React from 'react'
import AnswererProfile from '../../Components/AnswererProfile/AnswererProfile'
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
        </div>
        <div>
            <AnswerParagraph/>
        </div>
        <AnswererProfile/>
        <Likes/>
        <Comment/>
        <CommentInput/>
        <span>Your Answer</span>
    </div>
  )
}
