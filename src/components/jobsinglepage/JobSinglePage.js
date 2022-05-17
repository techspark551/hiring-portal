import "./jobsinglepage.css"
import { Link, Outlet } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { Card,CardGroup } from 'react-bootstrap';
import { useState ,useEffect} from "react";
import ApplyNowJob from "./applynow/ApplyNowJob";
import { GoCalendar } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { CgFacebook } from "react-icons/cg";
import { TiSocialTwitter } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import axios from "axios";


const JobSinglePage = (props) => {
    const[data,setData]=useState('')

        //FOR APPLY NOW FORM
            const [show, setShow] = useState(false);
            const showForm=()=>{
                setShow(true);
            }
            const closeForm = () => setShow(false);

        //get id fron joblist page When user click on oneoff job

            const getDataFromId=(id)=>{
                
                try{
                        axios.get(`http://localhost:8080/jobs/get/${id}`)
                        .then((response) => {  
                            
                            console.log(response.data, "res single job data");

                            setData(response.data)
                        })
                        .catch((err) => {
                            console.log("create job catch err", err);
                        });

                }catch(err){
                    console.log("catch err single job",err)
                }

            }

            useEffect(()=>{
                getDataFromId(props.getid)
            },[]) 


   return(
    <div className='container'>
    <div className='row'>
                <div className='col-md-12'>
                    <div className='sub_box'>
                        <div className="head_box">
                            <div className="logo_box">
                                <img src="/images/netflixlogo.png" alt="" />
                            </div>
        
                            <div className="head_content_box">
                                <h3 className='page-title'>{data.companyname}</h3>
                                <div>
                                    <ul className="link_ul list-unstyled">
                                        <li><CgFacebook />{data.facebook}</li>
                                        <li><TiSocialTwitter />{data.linkdin}</li>
                                        <li><IoIosCall />{data.twitter}</li>
                                        <li><CgMail />{data.email}</li>
                                    </ul>
                                </div>
                                <a href="" className="login_btn"><CgMail />Login to Send Message</a>
                            </div>
        
                            <div className="apply_btn">
                                <button type="button" className="btn btn-success" onClick={showForm}>
                                    <Link to="/singlejob/applynow" >Apply now</Link>
                                </button>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>



            <div className='row pt-4'>
                        <div className='col-md-8'>
                            <div className='education'>
                                <h4 className="main_title">Eduction</h4>
                                <p>{data.eduction} </p>
                            </div>
                            <div className="experience">
                                <h4 className="main_title">Experience</h4>
                                <p>{data.experiencedetail}</p>
                            </div>
                            <div className="knowledgeoff">
                                <h4 className="main_title">knowledge of</h4>
                                <ul>
                                    <li>
                                        <p>{data.knowledgeof}</p>
                                    </li>
                                    <li>
                                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </li>
                                    <li>
                                        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a 
                                        complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
                                    </li>
                                    <li>
                                        <p>"On the other hand,expound the actual teachings of the great explorer of the truth, the master-builder of the master-builde
                                         we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,</p>
                                    </li>
                                    <li>
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.righteous indignation and dislike men who are so
                                         Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum</p>
                                    </li>
                                    <li>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                         when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    </li>  
                                </ul>
                                <div className="social-btn">
                                    <Button variant="primary" size="sm" active>
                                        facebook
                                    </Button>{' '}
                                    <Button variant="info" size="sm">twitter</Button>{' '}
                                </div>
                            </div>
                        </div>
            
                        <div className='col-md-4 job_overview'>
                            <div className="job_overview_heading">
                                <h1 className='page-title'>Job Overview</h1>
                            </div>
                            <div className="job_overview_details">
                                    <div className="overview_itemdiv">
                                            <div className="overview_logo">
                                                <GoCalendar />
                                            </div>
                                            <div className="overview_items">
                                                <h6>Date Posted:</h6>
                                                <p>posted 3 years ago</p>
                                            </div>
                                    </div>
                                    <div className="overview_itemdiv">
                                            <div className="overview_logo">
                                                <BsClock />
                                            </div>
                                            <div className="overview_items">
                                                <h6>Expiration Date </h6>
                                                <p>15,April ,2023</p>
                                            </div>
                                    </div>
                                    <div className="overview_itemdiv">
                                            <div className="overview_logo">
                                                <GoLocation/>
                                            </div>
                                            <div className="overview_items">
                                                <h6>Location</h6>
                                                <p>{data.location}</p>
                                            </div>
                                    </div>
                                    <div className="overview_itemdiv">
                                            <div className="overview_logo">
                                                <MdOutlinePersonOutline/>
                                            </div>
                                            <div className="overview_items">
                                                <h6>Job Title</h6>
                                                <p>{data.jobtitle}</p>
                                            </div>
                                    </div>
                                    <div className="overview_itemdiv">
                                            <div className="overview_logo">
                                                <GiMoneyStack/>
                                            </div>
                                            <div className="overview_items">
                                                <h6>Rate</h6>
                                                <p>{data.rate}</p>
                                            </div>
                                    </div>
                            </div>
                            <div className="job_location">
                            <h1 className='page-title'>Job Location</h1></div>
                            <div className='map'>
                                Add Google Map
                            </div>
                        </div>
            
                    </div>




                    <div className='row pt-4'>
                                <div className="footer_title">
                                    <h1 className='page-title'>Retaled Jobs</h1>
                                </div>
                                <div className="footer_card pt-4">
                    
                                        <CardGroup>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>Card title</Card.Title>
                                                    <div className="card-jobtype">
                                                        <p>filltime</p>
                                                        
                                                    </div>
                                                    <Card.Text>
                                                        This is a wider card with supporting text below as a natural lead-in to
                                                        additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button variant="success">Apply for this Job</Button>
                                                </Card.Footer>
                                            </Card>
                    
                                            <Card>
                                            <Card.Body>
                                                <Card.Title>Card title</Card.Title>
                                                <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                                content.{' '}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button variant="success">Apply for this Job</Button>
                                            </Card.Footer>
                                            </Card>
                                        
                                    </CardGroup>
                                    
                                </div>
                                <div>{show && <ApplyNowJob show={show} closeForm={closeForm}/> }</div>
                            
                            </div>
                           


    </div>
   )

//   return (
     
//     <div className='container'>
//     {console.log(show)}
//         <div className='row'>
//             <div className='col-md-12'>
//                 <div className='sub_box'>
//                     <div className="head_box">
//                         <div className="logo_box">
//                             <img src="/images/netflixlogo.png" alt="" />
//                         </div>
    
//                         <div className="head_content_box">
//                             <h3 className='page-title'>Company Name</h3>
//                             <div>
//                                 <ul className="link_ul list-unstyled">
//                                     <li>facebookId</li>
//                                     <li>sfsdfdgfh.in</li>
//                                     <li>1234567890</li>
//                                     <li>example@gmail.com</li>
//                                 </ul>
//                             </div>
//                             <a href="" className="login_btn">Login to Send Message</a>
//                         </div>
    
//                         <div className="apply_btn">
//                             <button type="button" className="btn btn-success" onClick={showForm} >
//                                 <Link to="/singlejob/applynow" >Apply now</Link>
//                             </button>
//                         </div>
            
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className='row pt-4'>
//             <div className='col-md-8'>
//                 <div className='education'>
//                     <h4 className="main_title">Eduction</h4>
//                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//                      The point of using Lorem Ipsum is that it </p>
//                 </div>
//                 <div className="experience">
//                     <h4 className="main_title">Experience</h4>
//                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
//                     by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
//                     you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//                 </div>
//                 <div className="knowledgeoff">
//                     <h4 className="main_title">knowledge of</h4>
//                     <ul>
//                         <li>
//                             <p>If you use this site regularly and would like to help keep the site on the Interne</p>
//                         </li>
//                         <li>
//                             <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
//                             eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
//                         </li>
//                         <li>
//                             <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a 
//                             complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>
//                         </li>
//                         <li>
//                             <p>"On the other hand,expound the actual teachings of the great explorer of the truth, the master-builder of the master-builde
//                              we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,</p>
//                         </li>
//                         <li>
//                             <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.righteous indignation and dislike men who are so
//                              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum</p>
//                         </li>
//                         <li>
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                              when an unknown printer took agalley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                         </li>  
//                     </ul>
//                     <div className="social-btn">
//                         <Button variant="primary" size="sm" active>
//                             facebook
//                         </Button>{' '}
//                         <Button variant="info" size="sm">twitter</Button>{' '}
//                     </div>
//                 </div>
//             </div>

//             <div className='col-md-4 job_overview'>
//                 <div className="job_overview_heading">
//                     <h1 className='page-title'>Job Overview</h1>
//                 </div>
//                 <div className="job_overview_details">
//                         <div className="overview_itemdiv">
//                                 <div className="overview_logo">
//                                     <img src="/images/calendar.png" alt="calender" />
//                                 </div>
//                                 <div className="overview_items">
//                                     <h6>Date Posted:</h6>
//                                     <p>posted 3 years ago</p>
//                                 </div>
//                         </div>
//                         <div className="overview_itemdiv">
//                                 <div className="overview_logo">
//                                     <img src="/images/clock.png" alt="calender" />
//                                 </div>
//                                 <div className="overview_items">
//                                     <h6>Expiration Date </h6>
//                                     <p>15,April ,2023</p>
//                                 </div>
//                         </div>
//                         <div className="overview_itemdiv">
//                                 <div className="overview_logo">
//                                     <img src="/images/location.png" alt="calender" />
//                                 </div>
//                                 <div className="overview_items">
//                                     <h6>Location</h6>
//                                     <p>Indore</p>
//                                 </div>
//                         </div>
//                         <div className="overview_itemdiv">
//                                 <div className="overview_logo">
//                                     <img src="/images/profession.png" alt="calender" />
//                                 </div>
//                                 <div className="overview_items">
//                                     <h6>Job Title</h6>
//                                     <p>WEB DEVELOPER</p>
//                                 </div>
//                         </div>
//                         <div className="overview_itemdiv">
//                                 <div className="overview_logo">
//                                     <img src="/images/money.png" alt="calender" />
//                                 </div>
//                                 <div className="overview_items">
//                                     <h6>Rate</h6>
//                                     <p>$20 - $25 /hours</p>
//                                 </div>
//                         </div>
//                 </div>
//                 <div className="job_location">
//                 <h1 className='page-title'>Job Location</h1></div>
//                 <div className='map'>
//                     Add Google Map
//                 </div>
//             </div>

//         </div>


//         <div className='row pt-4'>
//             <div className="footer_title">
//                 <h1 className='page-title'>Retaled Jobs</h1>
//             </div>
//             <div className="footer_card pt-4">

//                     <CardGroup>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Card title</Card.Title>
//                                 <div className="card-jobtype">
//                                     <p>filltime</p>
                                    
//                                 </div>
//                                 <Card.Text>
//                                     This is a wider card with supporting text below as a natural lead-in to
//                                     additional content. This content is a little bit longer.
//                                 </Card.Text>
//                             </Card.Body>
//                             <Card.Footer>
//                                 <Button variant="success">Apply for this Job</Button>
//                             </Card.Footer>
//                         </Card>

//                         <Card>
//                         <Card.Body>
//                             <Card.Title>Card title</Card.Title>
//                             <Card.Text>
//                             This card has supporting text below as a natural lead-in to additional
//                             content.{' '}
//                             </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button variant="success">Apply for this Job</Button>
//                         </Card.Footer>
//                         </Card>
                    
//                 </CardGroup>
                
//             </div>
        
//         </div>
//         <div>{show && <ApplyNowJob show={show} closeForm={closeForm}/> }</div>
//    </div>
//   )
}

export default JobSinglePage