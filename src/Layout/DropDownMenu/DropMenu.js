import React from 'react'
import { Link } from 'react-router-dom'
import './DropMenu.css'
import { MdPublic } from "react-icons/md";

export default function DropMenu() {
  return (
    <div className='drop-menu'>
      <ul>
        <li>
            <Link className='link' to={'/'}>Home</Link>
        </li>
        <li>
            <Link className='link'>
                <MdPublic/>
                <span> Public</span>
            </Link>
        </li>
        <li className='sub-list'>
            <ul>
                <li>
                    <Link className='link' to={'/askquestion'}>Ask Questions</Link>
                </li>
                {/* <li>
                    <Link className='link'>Tag</Link>
                </li> 
                <li>
                    <Link className='link'>Users</Link>
                </li>
                <li>
                    <Link className='link'>Companies</Link>
                </li>         */}
            </ul>
        </li>
        
        
      </ul>
    </div>
  )
}
