import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/register.css";

const Register = () => {
  const urlApi = process.env.REACT_APP_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeLastname = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${urlApi}/users/register`, {
        email,
        password,
        name,
        lastName,
      })
      .then(() => navigate('/login'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-register">
      <h1 className="titulo-register">Welcome!</h1>
      <form className="row g-3">
        <div className="col-6">
          <label className="col-form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChangeEmail}
          />
        </div>
        <div className="col-6">
          <label className="col-form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handleChangePassword}
          />
        </div>
        <div className="col-6">
          <label className="col-form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeName}
          />
        </div>
        <div className="col-6">
          <label className="col-form-label">Lastname</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeLastname}
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Register;
