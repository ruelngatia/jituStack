import React from 'react'
import { Link } from 'react-router-dom'
import './LogoutMenu.css'

export default function LogoutMenu() {
  return (
    <div className='logout-menu'>
        <ul>
            <li><Link className='link' to={'/login'} onClick={()=>{
              localStorage.removeItem('token')
            }}>Logout</Link></li>
        </ul>
    </div>
  )
}
