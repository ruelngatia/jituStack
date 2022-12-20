import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import './LoginForm.css'
import axios from 'axios'
import { setCurrentUser } from '../../redux/userReducer'
import { toast } from 'react-toastify';
import { schema } from '../../validation/validation'




export default function LoginForm() {

    const navigator = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setuserError] = useState(false)
    const [PassError, setPassError] = useState(false)

    const dispatch = useDispatch()
    const notify = () => toast.error("wrong user or password",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });  

    const getUser = (userName,password)=>{
        if (userName === '' ){
            setuserError(true)
            return
        }else if(password === ''){
            setPassError(true)
            return
        }


        const {error} = schema.validate({username,password})
        if (error?.message.includes('username')) return setuserError(true)
        if (error?.message?.includes('password')) return setPassError(true)


       axios.post('http://localhost:5050/users/login',
            {
                "username": userName,
                "password": password
            }
       ).then((result)=>{
            const user = result.data
            dispatch(setCurrentUser(user))
            localStorage.setItem('token',user.token)
            localStorage.setItem('user',userName)
            navigator('/')
       }).catch((err)=>{
            notify()
       })

   
    }

  return (
    <div className='login-form'>
        <form>
            <h2>Login</h2>
            <div>
                <label>User name</label>
                <br/>
                <input  
                    type={'text'}
                    value={username} 
                    onChange={(e)=>{setUsername(e.target.value)}}
                    className = {userError?'error': ''}
                />
                {userError?<span className='err-span'>username should have more than 3 chars</span>:<></>}
            </div>
            <div>
                <label>Password</label>
                <br/>
                <input 
                    type={'password'}
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className = {PassError ?'error': ''}
                />
                {PassError?<span className='err-span'>password should have 6 chars</span>:<></>}
            </div>
            <div className='login-signup'>
                    Don't have an account 
                    <span><Link className='span-signup' to={'/signup'}>Sign up</Link></span>
                </div>
            <div>
                <button type='button' onClick={()=>{getUser(username,password)}}>Login</button>
           </div>
        </form>
    </div>
  )
}
