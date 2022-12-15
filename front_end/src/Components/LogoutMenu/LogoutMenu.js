import React from 'react'
import { Link } from 'react-router-dom'
import './LogoutMenu.css'

export default function LogoutMenu() {
  return (
    <div className='logout-menu'>
        <ul>
            {/* <li><Link className='link'>My account</Link></li> */}
            <li><Link className='link' to={'/login'}>Logout</Link></li>
        </ul>
    </div>
  )
}
