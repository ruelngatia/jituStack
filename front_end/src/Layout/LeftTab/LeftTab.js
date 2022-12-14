import React from 'react'
import { Link } from 'react-router-dom'
import { MdPublic } from "react-icons/md";
import './LeftTab.css'

export default function LeftTab() {
  return (
    <div className='left-tab'>
        
        <ul>
            <li><Link className='left-tab-link' to={'/'}>Home</Link></li>
            <li><Link className='left-tab-link'><MdPublic/>Public</Link></li>
            <li>
                <ul>
                    <li><Link className='left-tab-link' to={'/askquestion'}> Ask Questions</Link></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
