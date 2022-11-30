import React, { Fragment } from 'react'
import { useState } from 'react';
import "./Login.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/auth-user"
      const {data: res} = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/home"
    } catch (error) {
      if(error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
        ){
          setError(error.response.data.message)
        }
    }
  }
  return(
    <Fragment>
      <div className='login'>
        <form onSubmit={handleSubmit} className='box'>
          <h1>Login</h1>
          <input type="email" name='email' placeholder='Email' value={data.email} onChange={handleChange}  />
          
          <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleChange} />    

          {error && <div className="error_msg">{error}</div>}
          <button className='btn_login' type='submit'>Sign In</button>
          <div className="daftar">
            <p>don't have account? <Link to="/daftar">Create Account</Link></p>
          </div>
        </form>
      </div>
      </Fragment>
  )
}


export default Login