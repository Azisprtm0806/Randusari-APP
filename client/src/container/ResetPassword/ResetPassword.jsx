import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react'
import "./ResetPassword.css"

const ResetPassword = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = "http://localhost:5000/reset-password";
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
      <div className='resetPass'>
        <form  className='box' onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <input type="email" name='email' placeholder='Email' required onChange={handleChange} />
          
          <input type="password" name='password' placeholder='Password' required onChange={handleChange} />    

          {msg && <div className="success_msg">{msg}</div>}
          {error && <div className="error_msg">{error}</div>}
          <button className='btn-edit' type='submit'>Edit</button>

        </form>
      </div>
    </Fragment>
  )
}

export default ResetPassword