import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchUser } from '../features/userDetailSlice';

const Navbar = () => {
  const allUsers=useSelector((state)=>state.app.users)
  const[searchData,setSearchData]=useState("")
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h4 className="navbar-brand" >RTK</h4>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Create Post</Link>
        </li>
        <li className="nav-item">
          <Link to='/read' className="nav-link" >All Post ({allUsers.length})</Link>
        </li>
        
        <input className="form-control me-2 W-50" type="search" placeholder="Search" aria-label="Search"
        value={searchData}
        onChange={(e)=>setSearchData(e.target.value)}/>
        
  </ul>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
