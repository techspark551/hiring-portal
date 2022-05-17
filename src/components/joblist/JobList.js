import React from 'react'
import { useState,useEffect } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import "./joblist.css"
import axios from 'axios';
import { GoLocation } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const JobList = (props) => {

        const [job,setJob]=useState([])
        const navigate=useNavigate();

        useEffect(()=>{

                try {
                    
                    axios
                        .get("http://localhost:8080/jobs/get")
                        .then((response) => {  
                           
                            console.log(response.data, "res job list data");
                            setJob(response.data)
                        
                        })
                        .catch((err) => {
                            console.log("create job catch err", err);
                        });
                    } catch (err) {
                        console.log("axios err", err);
                    }

        },[])


        const showSingleJob=(id)=>{

            console.log(id,"onclick job id")
            props.getSingleJobId(id)

            navigate("/singlejob")

        }
    

    

        return(
            <div className='container'>
                <div className='sub_container'>
                    <div className='sub_box'>
                    
                            <Row xs={1} md={2} className="g-4 pt-4">
                            
                                {
                                    job.map((item)=>{ 
                                        return <Col>
                                        <Card className='card_box' onClick={()=>showSingleJob(item._id)}>
                                        {console.log(item,"item")}
                                            <div className='container mt-4'>
                                               <div className='row align-self-center'>
                                                    <div className='col-md-2'>
                                                        <img src='/images/netflixlogo.png' alt='logo' className='logo_img' />
                                                    </div>
                                                    <div className='col-md-10'>
                                                        <h3 className='post-title'>{item.jobtitle}</h3>

                                                        <ul className='icon-list '>
                                                            <li>
                                                                <MdOutlineWorkOutline/> <span>Design</span>
                                                            </li>
                                                            <li>
                                                            <GoLocation/> <span>{item.joblocation}</span>
                                                            </li>
                                                            <li>
                                                                <GiMoneyStack/> <span>{item.rate}</span>
                                                            </li>
                                                        </ul>

                                                        <div className='button_box'>
                                                            <ul className='badages list-inline'>
                                                                <li className='list-inline-item'>{item.jobtype}</li>
                                                                <li className='list-inline-item'>Part Type</li>
                                                            </ul>    
                                                        </div>
                                                        <div className='bookmark'>
                                                        <img src='/images/bookmark.png' alt='bookmark'/>
                                                    </div>

                                                    </div>

                                                    
                                               </div>
                                            </div>
                                        </Card>
                                    </Col>
                                })}
                                   
                            </Row>
                    </div>
                </div>
            </div>
        )
}

export default JobList 


                                        