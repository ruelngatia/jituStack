import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {schema} from '../../validation/validation'

export default function SignUpForm() {

    const [ username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()

    const [usenameErr, setUsenameErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    
    const signup = (username,email,password)=>{

        
        const {error} = schema.validate({username,email,password})
        if (error?.message.includes('username')) return setUsenameErr(true)
        if (error?.message?.includes('password')) return setPassErr(true)
        if (error?.message?.includes('email')) return setEmailErr(true)

        
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
            <label>Username</label>
            <br/>
            <input type={'text'} value={username} onChange={(e)=>{setusername(e.target.value); console.log(username);}}/>
            <br/>
            {usenameErr?<span className='err-span'>invalid username</span>:<></>}
        </div>
        <div>
            <label>Email</label>
            <br/>
            <input type={'email'} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            {emailErr?<span className='err-span'>invalid email</span>:<></>}
        </div>
        <div>
            <label>Password</label>
            <br/>
            <input type={'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            {passErr?<span className='err-span'>invalid password</span>:<></>}
        </div>
        <div className='div-btn'>
            <button onClick={()=> signup(username,email,password)}>
                SignUp
            </button>
        </div>
            <p>
               Have an account <span><Link to={'/login'} className='span-link'>Login</Link></span>
            </p>
    </div>
  )
}
