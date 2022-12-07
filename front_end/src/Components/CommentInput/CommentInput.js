import React from 'react'
import './CommentInput.css'

export default function CommentInput() {
  return (
    <div className='comment-input'>
        <input type={'text'} placeholder={'Comment here'}/>
        <div className='comment-button-div'>
            <button>
                Comment
            </button>
        </div>
    </div>
  )
}
