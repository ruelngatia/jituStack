import React from 'react'
import { Link } from 'react-router-dom'
import './LogoutMenu.css'

export default function LogoutMenu() {
  return (
    <div className='logout-menu'>
        <ul>
            <li><Link className='link' to={'/auth/login'} onClick={()=>{
              localStorage.removeItem('token')
              localStorage.removeItem('user')
            }}>Logout</Link></li>
        </ul>
    </div>
  )
}
