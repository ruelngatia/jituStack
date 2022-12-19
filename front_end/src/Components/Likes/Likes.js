import React from 'react'
import './Likes.css'
import { MdThumbDownOffAlt } from "react-icons/md";
import { MdThumbUpOffAlt } from "react-icons/md";
import axios from 'axios'
import { useDispatch } from 'react-redux';



export default function Likes(props) {
  
  const dispatch = useDispatch()
  const details = props.likes
  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }
  

  const addlike = async()=>{
    axios.post('http://localhost:4040/addlike',{answer_id: props.answer_id},config)
    .then((then)=>{
      // dispatch(getAnswers(props.answer_id))
    })
    .catch((error)=>{
      console.log('like failed');
    })
  }

  const addDislike = async()=>{
    axios.post('http://localhost:4040/adddislike',{answer_id: props.answer_id},config)
    .then((then)=>{
      // dispatch(getAnswers(props.answer_id))
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='likes'>
        <div className='thumbs-up'>
            <span onClick={()=>{addlike()}}><MdThumbUpOffAlt /></span>
            <span className='thumbs-up-count'>{details.like}</span>
        </div>
        <div className='thumbs-down'>
            <span onClick={()=>{addDislike()}}><MdThumbDownOffAlt /></span>
            <span className='thumbs-down-count'>{details.dislike}</span>
        </div>
    </div>
  )
}
