import {React, useState} from 'react'
import './CommentInput.css'
import axios  from 'axios'
import { useDispatch } from 'react-redux'
import { getAnswers } from '../../redux/answerSlice'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function CommentInput(props) {

 const [comment, setComment] = useState('')
 const dispatch = useDispatch()

 let {pathname, search} = useLocation()

 const config = {
  headers:{
    Authorization: "Bearer ".concat(localStorage.getItem('token'))
  }
}

const notifyempty = () => toast.error("comment can not be empty",{
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});

  return (
    <div className='comment-input'>
        <input  onChange={(e)=>{setComment(e.target.value)}} type={'text'} value={comment} placeholder={'Comment here ....'} />
        <div className='comment-button-div' >
            <button onClick={()=>{setComment(''); console.log('canceled');}}>
                Cancel
            </button>
            <button onClick={()=>{
              if(comment === '') return notifyempty()
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
