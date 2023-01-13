import React from 'react'
import LoginButton from '../components/LoginButton'

const Login = () => {
  return (
    <div style={{display: "flex", flex: 1, flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
        <img alt="USpace Logo" src={require('../images/full-logo.png')} width="500px" height="500px"/>
        <LoginButton/>
    </div>
  )
}

export default Login
