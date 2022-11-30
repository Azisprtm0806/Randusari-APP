import React, { Fragment } from 'react'
import "./Daftar.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Daftar = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/register"
      const {data: res} = await axios.post(url, data)
      navigate("/")
      console.log(res.message)
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
      <div className='daftar'>
        <form className='box-daftar' onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input 
            className='input' 
            type="text" 
            name='firstName' 
            placeholder='First Name'
            value={data.firstName}
            onChange={handleChange} 
          />

          <input 
            className='input' 
            type="text" 
            name='lastName' 
            placeholder='Last Name'
            value={data.lastName}
            onChange={handleChange} 
          />

          <input 
            className='input' 
            type="email" 
            name='email' 
            placeholder='Username'
            value={data.email}
            onChange={handleChange}  
          />
          
          <input 
            className='input' 
            type="password" 
            name='password' 
            placeholder='Password'
            value={data.password}
            onChange={handleChange}  
          />    
          
          {error && <div className="error_msg">{error}</div>}
          <button className='btn_register' type='submit'>Register</button>

          <div className="login">
            <p>have account? <Link to="/">Login</Link></p>
          </div>
        </form>
      </div>
      </Fragment>
  )
}


export default Daftar