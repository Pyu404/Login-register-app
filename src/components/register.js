import React from 'react'
import './register.css'

function register() {
  return (
    <div  className="register">
    <h1>Register</h1>
    <input type="text" placeholder=" Your Email"></input>
    <input type="password" placeholder='Your Password'></input>
    <input type="password" placeholder='Re-enter Your Password'></input>
    <div className="button">Register</div>
    <div>or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default register