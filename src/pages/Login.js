import axios from "axios";
import { useEffect, useState } from "react";

import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    if (!email && !password) return;
    axios
      .get("/login")
      .then((res) => res.data)
      .catch(() => console.error("No se ha encontrado el usuario"));
  };

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <form className="row g-3">
        <div className=" col-6">
          <label className="col-form-label">Email:</label>
          <br />
          <input
            type="text"
            className="form-control"
            onChange={handleChangeEmail}
          />
        </div>
        <br />
        <div className="col-6">
          <label className="col-form-label">Password:</label>
          <br />
          <input
            type="password"
            className="form-control"
            onChange={handleChangePassword}
          />
        </div>
        <br />
        <button className="btn" onClick={onSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
