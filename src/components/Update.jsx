import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUser } from '../features/userDetailSlice';

const Update = () => {
  const[updateData,setUpdateData]=useState()
  const{ id }=useParams();
  const{users,loading}=useSelector((state)=>state.app);
  const dispatch=useDispatch()
  const navigate=useNavigate();

  console.log(users, 'hi')
  useEffect(()=>{
    if(id){
      const singleUser=users.filter((ele)=>ele.id===id)
      setUpdateData(singleUser[0]);
    }
    
  },[])
  const newData=(e)=>{
    setUpdateData({...updateData,[e.target.name]:e.target.value})
  }
  const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(updateUser(updateData));
    navigate('/read                                                                                                                                                                                                                                                                                   ')
  }
  console.log("updated Data",updateData);
  return (
    <div>
      <h1 className='my-20'>edit the data</h1>
        <form className='w-50 mx-auto'onSubmit={handleUpdate} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input
      type="text"
      name='name'
      className="form-control"
      value={updateData && updateData.name}
      onChange={newData}
      
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Email
    </label>
    <input
      type="text"
      name='email'
      className="form-control"
      value={updateData && updateData.email}
      onChange={newData}
      
    />
  </div>
  <div className="mb-3">
    <label className="form-check-label" htmlFor="exampleCheck1">
      age
    </label>
    <input
      type="text"
      name='age'
      className="form-control"
      value={updateData && updateData.age}
      onChange={newData}
      
    />
  </div>
  <div className="mb-3">
    <input
      className="form-check-input"
      type="checkbox"
      name='gender'
      value='male'
      checked={updateData && updateData.gender==='male'}
      
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Male
    </label>
  </div>
  <div className="mb-3">
    <input
      className="form-check-input"
      type="checkbox"
      name='gender'
      value='female'
      checked={updateData && updateData.gender==='female'}
      onChange={newData}
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Female
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

      
    </div>
  )
}

export default Update
