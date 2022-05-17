import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

import { Link } from 'react-router-dom'

const Login = () => {

    const[inputValue,setInputValue]=useState({
        email:'',
        password:'',
    })

    const navigate = useNavigate();

    const inputHandler=(e)=>{
        setInputValue({...inputValue,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        try{
          axios.post("http://localhost:8080/admin/login", inputValue)
              .then((response) => {
                  console.log(response.data.existsAdmin);
                  console.log(`Bearer ${response.data.token}`);
                  localStorage.setItem('token', `Bearer ${response.data.token}`);
                  navigate("/adminhome")

              }).catch((err)=>{
                  console.log("registation err",err.response.data)
              })
      }catch(err){
          console.log("axios err",err)
      }

        console.log(inputValue,"ivalue")
    }

  return (
<div>
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
                <div className="mb-md-3 mt-md-2 ">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-3">
                        <input type="email" id="typeEmailX" name='email' className="form-control form-control-lg" value={inputValue.email} onChange={inputHandler}/>
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-3">
                        <input type="password" id="typePasswordX" name='password' className="form-control form-control-lg" value={inputValue.password} onChange={inputHandler} />
                        <label className="form-label"  htmlFor="typePasswordX" >Password</label>
                    </div>
                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={submitHandler}>Login</button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                    </div>
                </div>
                <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">
                      <Link to="/register">Sign Up</Link>
                    </a>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Login