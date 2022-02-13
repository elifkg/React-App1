import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='container'>

            <div className="login">
             <sp className="loginTitle">Login</sp>
            <form className="loginForm">
                  <label >email</label>
                  <input type="text"  className="loginInput" placeholder="enter your email" />
                  <label >password</label>
                  <input type="password" className="loginInput" placeholder="enter your password" />
                    <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
            </div>

        </div>
    )
}
