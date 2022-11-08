import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) return;

    axios
      .post("http://localhost:8080/api/users/login", {
        email,
        password,
      })
      .then((res) => res.data)
      .then(() => navigate("/me"))
      .catch(() => console.error("No se ha encontrado el usuario"));
  };

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <form className="row g-3" onSubmit={onSubmit}>
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
        <Button type="submit" className="btn btn-primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
