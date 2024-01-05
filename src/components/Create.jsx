import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState({ name: false, email: false, age: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!users.name) {
      setError({ name: true });
    } else if (!users.email) {
      setError({ email: true });
    } else if (!users.age) {
      setError({ age: true });
    } else {
      dispatch(createUser(users));
      navigate("/read");
    }
  };
  console.log(error, "I am Error");

  return (
    <div>
      <h1 className="my-20">fill the data</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
          {error.name && <div style={{color:'red'}}>Please Enter the Name First</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
          {error.email && <div style={{color:'red'}}>Please Enter the email First</div>}
        </div>
        <div className="mb-3">
          <label className="form-check-label" htmlFor="exampleCheck1">
            age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
           {error.age && <div style={{color:'red'}}>Please Enter the email First</div>}
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={getUserData}
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
  );
};

export default Create;
