import React from 'react'
import './AnswererProfile.css'

export default function AnswererProfile() {
  return (
    <div className='answerer-profile'>
       <div className='answerer-avatar'>
            <img
                alt='avatar'
                src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80'
             />
       </div>
       <div>
            <span>Date</span>
            <br/>
            <span>John doe</span>
       </div>
    </div>
  )
}
