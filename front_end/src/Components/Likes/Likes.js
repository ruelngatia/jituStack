import React from 'react'
import './Likes.css'
import { MdThumbDownOffAlt } from "react-icons/md";
import { MdThumbUpOffAlt } from "react-icons/md";

export default function Likes(props) {
  const details = props.likes
  return (
    <div className='likes'>
        <div className='thumbs-up'>
            <span><MdThumbUpOffAlt /></span>
            <span className='thumbs-up-count'>{details.like}</span>
        </div>
        <div className='thumbs-down'>
            <span><MdThumbDownOffAlt /></span>
            <span className='thumbs-down-count'>{details.dislike}</span>
        </div>
    </div>
  )
}
