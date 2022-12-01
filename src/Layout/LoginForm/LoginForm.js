import React from 'react'
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
                <label>User name</label>
                <br/>
                <input type={'text'}/>
                <div className='signup'>
                    Don't have an account 
                    <span> Sign up</span>
                </div>
            </div>
           <div>
                <button>Login</button>
           </div>
        </form>
    </div>
  )
}
