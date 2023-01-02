import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: ""
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = "http://localhost:5000/forgot-password"
      await axios.post(url, data)
        .then(res => {
          setMsg(res.data.message)
        })
    } catch (error) {
      if(error.response && 
        error.response.status >= 400 && 
        error.response.status <= 500
        ){
          setError(error.response.data.message)
        }
    }
  }

  return (
    <Fragment>
      <div className='forgotPass'>
        <form className='box' onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <input type="email" name='email' placeholder='Email' required onChange={handleChange} />
          {msg && <div className="success_msg">{msg}</div>}
          {error && <div className="error_msg">{error}</div>}
          <button className='btn-submit' type='submit'>Send</button>
          <div className="back">
            <p><Link to="/">--Back </Link></p>
          </div>
        </form>
      </div>
    </Fragment>
  )
}

export default ForgotPassword