import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

export default function SignUpForm() {

    const [ username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()
    
    const signup = (username,email,password)=>{
       
        axios.post('http://localhost:5050/users/adduser ',{
            "username": username,
            "email": email,
            "password": password
        }).then((results)=>{
            navigator('/login')
            toast.success('user created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        })
        .catch((err)=>{
            toast.error('error please try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })

    }

  return (
    <div className='signup-form'>
        <h3>SignUp</h3>
        <div>
            <label>User name</label>
            <br/>
            <input type={'text'} value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        </div>
        <div>
            <label>Email</label>
            <br/>
            <input type={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <label>Password</label>
            <br/>
            <input type={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='div-btn'>
            <button onClick={()=> signup()}>
                SignUp
            </button>
        </div>
            <p>
               Have an account <span><Link to={'/login'} className='span-link'>Login</Link></span>
            </p>
    </div>
  )
}
