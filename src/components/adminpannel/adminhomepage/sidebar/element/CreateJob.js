import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const CreateJob = () => {

      const [inputValue, setInputValue] = useState({
        companyname: "",
        tagline: "",
        email: "",
        linkdin: "",
        facebook: "",
        twitter: "",
        jobtitle: "",
        // yearexperience: "",
        experience_from:'',
        experience_to:'',
        joblocation: "",
        jobtype: "",
        rate: "",
        eduction: "",
        experiencedetail: "",
        knowledgeof: "",
        // file:""
        user_file:""
      });
      
      
//INPUT HANDLER
      const inputHandler = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
      };

  //FILE Handler
      const fileHandler=(e)=>{
       
        // setInputValue({...inputValue,user_file:e.target.value})
        setInputValue({...inputValue,user_file:e.target.files[0]})
        // console.log(inputValue.file,"clg file")
      }

//onSUBMIT Handler
      const submitHandler =  (e) => {
            e.preventDefault();
            console.log(inputValue, "all values onsubmit");
            const token = localStorage.getItem("token");
            console.log(token, "token");

              let config = {
                headers: {
                  headers: { 'Content-Type': 'multipart/form-data' },
                  token: `Bearer${token}`,
                },
              };

          //here we remove complete path from file name
              // var path=inputValue.user_file;
              // var fileName=path.replace(/^.*\\/, "");
              // console.log(fileName," remove path fileName")
            
            
              let formData = new FormData();
              
              formData.append("companyname",inputValue.companyname);
              formData.append("tagline",inputValue.tagline);
              formData.append("email",inputValue.email);
              formData.append("linkdin",inputValue.linkdin);
              formData.append("facebook",inputValue.facebook);
              formData.append("twitter",inputValue.twitter);
              formData.append("jobtitle",inputValue.jobtitle);
              // formData.append("yearexperience",inputValue.yearexperience);
              formData.append("experience_from",inputValue.experience_from);
              formData.append("experience_to",inputValue.experience_to);
              formData.append("joblocation",inputValue.joblocation);
              formData.append("rate",inputValue.rate);
              formData.append("eduction",inputValue.eduction);
              formData.append("experiencedetail",inputValue.experiencedetail);
              formData.append("knowledgeof",inputValue.knowledgeof);
              formData.append("jobtype",inputValue.jobtype);
              formData.append("file",inputValue.user_file);
              formData.append("fileName",inputValue.user_file.name);

             
              console.log(inputValue.user_file,"formdata file value")
              console.log(inputValue.user_file.name,"formdata name")
              console.log(formData,"formdata")
             

            try {
          
              axios
                .post("http://localhost:8080/jobs/create", formData, config)
                .then((response) => {
                  console.log(response.data, "res data");
                })
                .catch((err) => {
                  // console.log("create job catch err", err.response.data.error);
                  console.log("catch err",err)
                });
            } catch (err) {
              console.log("axios err", err);
            }
      };


  return (
    <div>
      <Card>
      {console.log(inputValue.user_file,"file")}
        <Card.Header>
          <h3>Create Job Post</h3>
        </Card.Header>
        <Card.Body>
            <form enctype="multipart/form-data">
                  <div className="row p-2">
                  <h5>Company details</h5>
                  <div className="col-md-6">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Company Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="companyname"
                        className="form-control form-control-lg"
                        value={inputValue.companyname}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Company Tagline
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="tagline"
                        className="form-control form-control-lg"
                        value={inputValue.tagline}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <div className="col-md-3">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email Id
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="email"
                        className="form-control form-control-lg"
                        value={inputValue.email}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Linkdin Id
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="linkdin"
                        className="form-control form-control-lg"
                        value={inputValue.linkdin}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Facebook Id
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="facebook"
                        className="form-control form-control-lg"
                        value={inputValue.facebook}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Twitter Id
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="twitter"
                        className="form-control form-control-lg"
                        value={inputValue.twitter}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <h5>Job details</h5>
                  <div className="col-md-6">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="jobtitle"
                        className="form-control form-control-lg"
                        value={inputValue.jobtitle}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Year of Experience
                      </label>
                      <div className="row p-2">
                          <div className="col-md-6 d-flex">
                              <label className="form-label" htmlFor="form3Example1cg">
                              from:-
                            </label>
                            <input
                                type="text"
                                id="form3Example1cg"
                                name="experience_from"
                                className="form-control form-control-lg"
                                value={inputValue.experience_from}
                                onChange={inputHandler}
                                
                              />
                          </div>
                          <div className="col-md-6 d-flex">
                                <label className="form-label" htmlFor="form3Example1cg">
                                to:-
                              </label>
                              <input
                                  type="text"
                                  id="form3Example1cg"
                                  className="form-control form-control-lg"
                                  name="experience_to"
                                  value={inputValue.experience_to}
                                  onChange={inputHandler}
                              />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <div className="col-md-4">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Job Location
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="joblocation"
                        className="form-control form-control-lg"
                        value={inputValue.joblocation}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Job Type
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="jobtype"
                        className="form-control form-control-lg"
                        value={inputValue.jobtype}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Rate
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        name="rate"
                        className="form-control form-control-lg"
                        value={inputValue.rate}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <div className="col-md-12">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Required Eduction
                      </label>
                      <textarea
                        type="textarea"
                        id="form3Example1cg"
                        name="eduction"
                        className="form-control form-control-lg"
                        value={inputValue.eduction}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <div className="col-md-12">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Experience In Details
                      </label>
                      <textarea
                        type="textarea"
                        id="form3Example1cg"
                        name="experiencedetail"
                        className="form-control form-control-lg"
                        value={inputValue.experiencedetail}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <div className="col-md-12">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Required Knowledge of
                      </label>
                      <textarea
                        type="textarea"
                        id="form3Example1cg"
                        name="knowledgeof"
                        className="form-control form-control-lg"
                        value={inputValue.knowledgeof}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
            
      
                <div className="row p-2">
                  <div className="col-md-12">
                    <div className="form-outline mb-1">
                      <label className="form-label" htmlFor="form3Example1cg">
                        upload LOGO
                      </label>
                      <input
                        type="file"
                        id="form3Example1cg"
                        accept=".png,.jpg,.jpeg,.pdf,.doc"
                        name="user_file"
                        className="form-control form-control-lg"
                        
                        onChange={fileHandler}
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-2">
                  <Button variant="primary" onClick={submitHandler}>
                    Create Job Post
                  </Button>
                </div>
            
            </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateJob;
