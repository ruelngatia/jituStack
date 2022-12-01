import React from 'react'
import AnswererProfile from '../../Components/AnswererProfile/AnswererProfile'
import Comment from '../../Components/Comment/Comment'
import CommentInput from '../../Components/CommentInput/CommentInput'
import Likes from '../../Components/Likes/Likes'
import './AnswerCard.css'

export default function AnswerCard() {
  return (
    <div className='answer-card'>
        <div className='question-title'>
            <h3>PL/SQL MERGE INTO Compilation Errors</h3>
        </div>
        <div>
            <p>
                I want to use PL/SQL MERGE to perform an UPSERT on a single table defined as
            </p>
        </div>
        <AnswererProfile/>
        <Likes/>
        <Comment/>
        <CommentInput/>
        <span>Your Answer</span>
    </div>
  )
}
