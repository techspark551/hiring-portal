import React from 'react'
import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'

const ApplyNowJob = (props) => {
  const [input,setInput]=useState({
    name:'',
    experience:'',
    position:'',
    currentctc:'',
    expectedctc:'',
    file:''
  });

  const inputHandler=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
  }
    
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log(input,"input")
  }

  return (
    <div>
        <Modal show={props.show} onHide={props.closeForm}>
          <Modal.Header closeButton>
              <Modal.Title>Apply For This Job</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Name</label>
                      <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='name'
                          onChange={inputHandler}
                          value={input.name}
                      />
                  </div>  
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Experience</label>
                      <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='experience'
                          onChange={inputHandler}
                          value={input.experience}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Position Applied for</label>
                      <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='position'
                          onChange={inputHandler}
                          value={input.position}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Current CTC (Per Anum)</label>
                      <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='currentctc'
                          onChange={inputHandler}
                          value={input.currentctc}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Expected CTC</label>
                      <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='expectedctc'
                          onChange={inputHandler}
                          value={input.expectedctc}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="formGroupExampleInput">Choose file</label>
                      <input
                          type="file"
                          className="form-control"
                          id="formGroupExampleInput"
                          name='file'
                          onChange={inputHandler}
                          value={input.file}
                      />
                  </div>
            </Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={submitHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ApplyNowJob