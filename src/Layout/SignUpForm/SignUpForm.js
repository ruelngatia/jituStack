import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'

export default function SignUpForm() {
  return (
    <div className='signup-form'>
        <h3>SignUp</h3>
        <div>
            <label>User name</label>
            <br/>
            <input type={'text'}/>
        </div>
        <div>
            <label>Email</label>
            <br/>
            <input type={'email'}/>
        </div>
        <div>
            <label>Password</label>
            <br/>
            <input type={'password'}/>
        </div>
        <div className='div-btn'>
            <button>SignUp</button>
        </div>
            <p>
               Have an account <span><Link to={'/login'} className='span-link'>Login</Link></span>
            </p>
    </div>
  )
}
