import React from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <form>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <label>Imei</label>
        <input type="text" />
        <button onClick={e => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
