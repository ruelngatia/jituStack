import {React,useState} from 'react'
import './AskQuestion.css'
import TinyMCE from'../../Components/TinyMCE/TinyMCE'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function AskQuestion() {

    const [title, setTitle] = useState('')
    const navigator = useNavigate()

    let questionObj = {
        question_title: '',
        question: ''
    }

    const notifyfail = () => toast.error("question not not adde",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }); 
    
    const notifySuccess = () => toast.success("question was added",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const inputHandler = (ques)=>{
        questionObj.question = ques
        questionObj.question_title = title 

        console.log(title);
        console.log(ques);
        

        if(questionObj.question === '' || questionObj.question_title === ''){
            return console.log(' did not continue');
        }
        postQuestion()

    }

    const config = {
        headers:{
          Authorization: "Bearer ".concat(localStorage.getItem('token'))
        }
      }

    const postQuestion = async()=>{
        
        axios.post('http://localhost:4040/addquestion',questionObj,config)
        .then((res)=>{
            notifySuccess()
            navigator('/')
        })
        .catch((error)=>{
           notifyfail()
        })
    }

  return (
    <div className='container'>
        <div className='ask-question'>
            <div className='input-div'>
                <div>
                    <label>Enter Question title</label>
                    <br/>
                    <input placeholder='Enter question title' type={'text'} value={title}  onChange={(e)=> setTitle(e.target.value)}/>
                </div>
            </div>
            <div>
                <TinyMCE input={inputHandler} />
            </div>
        </div>
    </div>

  )
}
