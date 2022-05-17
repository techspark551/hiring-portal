import React from 'react'
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const Registation = () => {

                    const[inputValue,setInputValue]=useState({
                        companyname:'',
                        email:'',
                        address:'',
                        password:'',
                        cpassword:''
                    })

                    const navigate = useNavigate();

                    const inputHandler=(e)=>{
                        setInputValue({...inputValue,[e.target.name]:e.target.value})
                    }

                //onSUBMIT REGISTER ADMIN
                    const submitHandler=(e)=>{
                        e.preventDefault();

                        try{
                            console.log("register hit")
                            axios.post("http://localhost:8080/admin/register", inputValue)
                                .then((response) => {
                                    console.log(response.data.token);
                                    localStorage.setItem('token',`Bearer${response.data.token}`);
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
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card bg-dark text-white"  style={{borderRadius: '15px'}}>
                                <div className="card-body px-10">
                                    <h4 className="text-uppercase text-center">Register as an Admin</h4>
                                    <form>
                                    <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example1cg">Your Company Name</label>
                                            <input type="text" id="form3Example1cg" name='companyname'  className="form-control form-control-lg" value={inputValue.name} onChange={inputHandler}/>
                                    </div>
                                    <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            <input type="email" id="form3Example3cg" name='email' className="form-control form-control-lg" value={inputValue.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Address</label>
                                            <input type="text" id="form3Example4cg" name='address' className="form-control form-control-lg" value={inputValue.address} onChange={inputHandler}/>
                                    </div>
                                    <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            <input type="password" id="form3Example4cg" name='password' className="form-control form-control-lg" value={inputValue.password} onChange={inputHandler}/>
                                    </div>
                                    <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            <input type="password" id="form3Example4cdg" name='cpassword' className="form-control form-control-lg" value={inputValue.cpassword} onChange={inputHandler}/>
                                        
                                    </div>
                                    
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={submitHandler}>Register</button>
                                    </div>
                                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="text-white-50 fw-bold"><Link to="/login">Login here</Link></a></p>
                                    </form>
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

export default Registation

const mystyle={
        position:" unset !important"
}