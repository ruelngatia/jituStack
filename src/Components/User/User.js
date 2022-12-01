import React from 'react'
import './User.css'

export default function User() {
  return (
    <div className='user'>
        <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80' alt='profile'/>
        <div>
            <span className='name'>John Doe</span>
           
            <span className='time-asked'>2hrs ago</span>
        </div>
    </div>
  )
}
