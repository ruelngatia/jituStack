import React from 'react'
import './Comment.css'



export default function Comment(props) {
  const comment = props.comment
  return (
    <div className='comment'>
       <div>
            <p>
                {'cat'}
            </p>
       </div>
        <div className='comment-stamp'>
          <span>{comment.username}</span>
          <span>{comment.date_commented}</span>
        </div>
    </div>
  )
}
