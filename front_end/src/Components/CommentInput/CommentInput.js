import {React, useState} from 'react'
import './CommentInput.css'
import axios  from 'axios'

export default function CommentInput(props) {

 const [comment, setComment] = useState('')
 
 const config = {
  headers:{
    Authorization: "Bearer ".concat(localStorage.getItem('token'))
  }
}

  return (
    <div className='comment-input'>
        <input  onChange={(e)=>{setComment(e.target.value)}} type={'text'} value={comment} placeholder={'Comment here ....'} />
        <div className='comment-button-div' >
            <button onClick={()=>{setComment('')}}>
                Cancel
            </button>
            <button onClick={()=>{
              axios.post('http://localhost:4040/addcomment',{
                answer_id: props.answer_id,
                comment: comment
              },config).then((n)=>{
                console.log('suuc');
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
