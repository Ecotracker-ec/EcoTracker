import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./style/indexforgetpswd.css";
import "./style/responsive.css";
import { useNavigate } from 'react-router-dom';

const Forgetpswd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Here you can handle form validation or submission logic

    // Navigate to the Userinfo page
    navigate('/login');
  };
  return (
    <div className="forget-pswd-main">
      <div className="forget-pswd-left">
        <img src={Image} alt="" />
      </div>
      <div className="forget-pswd-right">
        <div className="forget-pswd-right-container">
          <div className="forget-pswd-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="forget-pswd-center">
            <h2>Forgot Password?</h2>
            <p><br></br> Recover your account<br></br>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <div className="pass-input-div">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter registered email" required />
              </div>
              <div className="forget-pswd-center-buttons">
                <button type="submit" onSubmit={handleSubmit}> Recover</button>
              </div>
            </form>
          </div>

          <p className="forget-pswd-bottom-p">
            Don't have an account? <a href="/">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgetpswd;
