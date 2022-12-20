import React from 'react'
import './User.css'
import Avatar from 'react-avatar';

export default function User(props) {

  const user = props.userProfile

  return (
    <div className='user'>
        {user.image_url=== null?<Avatar size='32' className='avatar' name={user.username} />:
          <img src={user.image_url} alt='profile'/>
        }
        
        <div>
            <span className='name'>{user.username}</span>
           
            <span className='time-asked'>{user.asked}</span>
        </div>
    </div>
  )
}
