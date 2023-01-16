import React from 'react'
import './login.css'

function login() {
  return (
    <div  className="login">
    <h1>login</h1>
    <input type="text" placeholder="Enter Your Email"></input>
    <input type="password" placeholder='Enter Your Password'></input>
    <div className="button">Login</div>
    <div>or</div>
    <div className="button">Register</div>
    </div>
  )
}

export default login