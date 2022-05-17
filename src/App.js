
import './App.css';
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import JobList from './components/joblist/JobList';
 import JobSinglePage from './components/jobsinglepage/JobSinglePage';
 import ApplyNowJob from './components/jobsinglepage/applynow/ApplyNowJob';
 import Register from './components/adminpannel/auth/Registation';
 import Login from './components/adminpannel/auth/Login';
 import AdminHomePage from './components/adminpannel/adminhomepage/AdminHomePage';
import CreateJob from './components/adminpannel/adminhomepage/sidebar/element/CreateJob';
import Sidebar from './components/adminpannel/adminhomepage/sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [getid,setGetid]=useState('')

  const getSingleJobId=(id)=>{
    console.log(id,"getid")
      setGetid(id)
  }

  return (
    <div className='main-cintainer'>

    <Router>
    
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/jobs" element={<JobList getSingleJobId={getSingleJobId}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminhome" element={<AdminHomePage />} >  
          
            <Route path='createjob' element={<CreateJob />} />
          
      </Route>

      <Route path="/singlejob" element={<JobSinglePage getid={getid}/>} >
            <Route path="applynow" element={<ApplyNowJob/>}/>
      </Route>
    </Routes>
 </Router>
       
    </div>
  );
}

export default App;
