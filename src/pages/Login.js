import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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
          <label className="col-form-label" onChange={handleChangeEmail}>
            Email:
          </label>
          <br />
          <input type="text" className="form-control" />
        </div>
        <br />
        <div className="col-6">
          <label className="col-form-label" onChange={handleChangePassword}>
            Password:
          </label>
          <br />
          <input type="password" className="form-control" />
        </div>
        <br />
        <Button className="btn btn-primary" onClick={onSubmit}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
