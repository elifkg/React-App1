import React from 'react'
import "./register.css"
export default function Register() {
    return (
        
            

<div className='container'>

<div className="register">
<sp className="loginTitle">Register</sp>

            <form className="loginForm">
                <label>username </label>
                <input type="text" classname="loginInput" placeholder="enter your username" />

                  <label >email</label>
                  <input type="text"  className="loginInput" placeholder="enter your email" />
                  <label >password</label>
                  <input type="password" className="loginInput" placeholder="enter your password" />

                    <button className="loginButton">Register</button>
            </form>
            <button className="loginRegisterButton">Register</button>
</div>
</div>
    )



    
    
}
