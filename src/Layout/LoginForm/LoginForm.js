import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

export default function LoginForm() {
  return (
    <div className='login-form'>
        <form>
            <h2>Login</h2>
            <div>
                <label>User name</label>
                <br/>
                <input type={'text'}/>
            </div>
            <div>
                <label>Password</label>
                <br/>
                <input type={'password'}/>
            </div>
            <div className='login-signup'>
                    Don't have an account 
                    <span><Link className='span-signup' to={'/signup'}>Sign up</Link></span>
                </div>
            <div>
                <button>Login</button>
           </div>
        </form>
    </div>
  )
}
