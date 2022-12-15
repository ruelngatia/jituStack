import React from 'react'
import './Likes.css'
import { MdThumbDownOffAlt } from "react-icons/md";
import { MdThumbUpOffAlt } from "react-icons/md";

export default function Likes() {
  return (
    <div className='likes'>
        <div className='thumbs-up'>
            <span><MdThumbUpOffAlt /></span>
            <span className='thumbs-up-count'>15</span>
        </div>
        <div className='thumbs-down'>
            <span><MdThumbDownOffAlt /></span>
            <span className='thumbs-down-count'>2</span>
        </div>
    </div>
  )
}
