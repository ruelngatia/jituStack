import {React, useState} from 'react'
import './CommentInput.css'
import axios  from 'axios'
import { useDispatch } from 'react-redux'
import { getAnswers } from '../../redux/answerSlice'
import { useLocation } from 'react-router-dom'

export default function CommentInput(props) {

 const [comment, setComment] = useState('')
 const dispatch = useDispatch()

 let {pathname, search} = useLocation()

 const config = {
  headers:{
    Authorization: "Bearer ".concat(localStorage.getItem('token'))
  }
}

  return (
    <div className='comment-input'>
        <input  onChange={(e)=>{setComment(e.target.value)}} type={'text'} value={comment} placeholder={'Comment here ....'} />
        <div className='comment-button-div' >
            <button onClick={()=>{setComment(''); console.log('canceled');}}>
                Cancel
            </button>
            <button onClick={()=>{
              if(comment === '') return
              axios.post('http://localhost:4040/addcomment',{
                answer_id: props.answer_id,
                comment: comment
              },config).then((n)=>{
                console.log('suuc');
                dispatch(getAnswers(pathname.split("/")[2]))
                setComment('')
              }).catch((err)=>{
                console.log('err');
              })
            }}>
                Comment
            </button>
        </div>
    </div>
  )
}
