import React from 'react'
import './User.css'
import Avatar from 'react-avatar';

export default function User(props) {

  const user = props.userProfile

  return (
    <div className='user'>
        {user.image_url=== null?<Avatar size='32' className='avatar' name={user.username} />:
          <img src={ 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80'} alt='profile'/>
        }
        
        <div>
            <span className='name'>{user.username}</span>
           
            <span className='time-asked'>{user.asked}</span>
        </div>
    </div>
  )
}
