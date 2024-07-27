import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./style/indexLogin.css";
import "./style/responsive.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const handlepassChange = (e) => {
    setpass(e.target.value);
  };
  const handlemailChange = (e) => {
    setemail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('https://ecotracker-t8em.onrender.com/auth/login', { email: email, password: pass });
      console.log(resp.data)
      localStorage.setItem('userEmail', email); 
      navigate('/homepage');
    } catch (error) {
      console.log(pass)
      console.log(error.resp)
    }
  };


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Log In</h2>
            <p><br></br> Welcome back!<br></br>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <div className="pass-input-div">
                <input type="email" name="email" value={email} onChange={handlemailChange} placeholder="Email" required />
                <input name="pass" value={pass} onChange={handlepassChange} type={showPassword ? "text" : "password"} placeholder="Password" required />
                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}

              </div>

              <div className="remeber-div">
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="/">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
