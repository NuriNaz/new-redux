import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDetailSlice';
import CustomModel from './CustomModel';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/userDetailSlice';

const Read = () => {
    const dispatch=useDispatch();
    const[id,setId]=useState();
    const[showPopUp,setShowPopUp]=useState(false);
    const {users,loading,searchData}=useSelector((state)=>state.app)
    useEffect(()=>{
        dispatch(showUser());

    },[])
    if(loading){
        return(<h1>loading</h1>)
    }
  return (
    
    <div>
        {showPopUp &&<CustomModel id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>}
        <h1>All Data</h1>
        <div>
        {users && 
         users.filter((ele)=>{
          if(searchData.length===0){
            return ele
          }else{
            return ele.name.toLowerCase().includes(searchData.toLowerCase());
          }

         })
        .map((ele)=>(<div key={ele.id} className="card w-50 mx-auto" style={{ width: "18rem" }}>
         <div className="card-body">
        <h5 className="card-title">{ele.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
        <p className="card-text">
         {ele.gender}</p>
        <button className="card-link" onClick={()=>[setId(ele.id),setShowPopUp(true)]}>
         View</button>
        <Link to={`/edit/${ele.id}`} className="card-link">
         Edit
        </Link>
        <Link onClick={()=>dispatch(deleteUser(ele.id))} className="card-link">
         Delete
        </Link>
        </div>
         </div>
        ))}
       



        </div>
    </div>
  )
}

export default Read