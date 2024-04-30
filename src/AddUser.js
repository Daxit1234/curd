import React, { useState } from 'react';

const AddUser = () => {
  const [user,setUser]=useState({name:"",age:null,phone:null})

  const handleonChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    // Here you can perform form validation if needed
    console.log(user)
    try {
        
        let res= await fetch("http://localhost:3001/user/addUser",{
             method:'POST',
             headers: {
                'Content-Type': 'application/json'
              },
             body:JSON.stringify(user)
         })
         let data=await res.json()
         console.log(data)
    } catch (error) {
        console.log(error)
    }
    // Collect form data
    // setUser({name:"",age:"",phone:""})

  
  };

  return (
    <>
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Add User</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name='name' className="form-control" id="name"  onChange={handleonChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" name='age' className="form-control" id="age"  onChange={handleonChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="number"  name="phone" className="form-control" id="phone"  onChange={handleonChange} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
