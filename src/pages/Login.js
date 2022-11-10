import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { userLogin } from "../app/user";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) return;

    const { data } = await axios.post("http://localhost:8080/api/users/login", {
      email,
      password,
    });
    cookies.set("token", data.token, { path: "/" });
    const res = await axios.get("http://localhost:8080/api/users/me", {
      withCredentials: true,
    });
    console.log("dato", res);
    dispatch(userLogin(res.data));

    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  return (
    <div className="container-login">
      <h1 className="header-login">Login</h1>
      <form>
        <div className="col-login">
          <label className="col-form-label">Email:</label>
          <br />
          <input
            type="text"
            className="form-control"
            onChange={handleChangeEmail}
          />
        </div>
        <br />
        <div className="col-login">
          <label className="col-form-label">Password:</label>
          <br />
          <input
            type="password"
            className="form-control"
            onChange={handleChangePassword}
          />
        </div>
        <br />
        <div className="row text-center">
          <button className="btn btn-login" onClick={onSubmit}>
            Login
          </button>
          <Link to="/register"> Register Now!</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
