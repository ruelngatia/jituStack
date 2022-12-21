import React from 'react'
import './Comment.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'



export default function Comment(props) {
  TimeAgo.addDefaultLocale(en)
  const timeAgo = new TimeAgo('en-US')
  const comment = props.comment


  console.log(comment);
  return (
    <div className='comment'>
       <div>
            <p>
                {[comment.comment[1]]}
            </p>
       </div>
        <div className='comment-stamp'>
          <span>{comment.username}</span>
          <span>{timeAgo.format(new Date(comment.date_commented),'round')}</span>
        </div>
    </div>
  )
}
