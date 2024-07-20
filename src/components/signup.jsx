import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import "./style/indexSignup.css";
import "./style/responsive.css";


const Signup = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Here you can handle form validation or submission logic

    // Navigate to the Userinfo page
    navigate('/userinfo');
  };

  return (
    <div className="signup-main">
      <div className="signup-left">
        <img src={Image} alt="" />
      </div>
      <div className="signup-right">
        <div className="signup-right-container">
          <div className="signup-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="signup-center">
            <h2>Sign Up!</h2>
            <p><br></br>Welcome<br></br>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" required/>
              <input type="email" placeholder="Enter a valid email" required/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder=" Create Password" required/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="signup-center-buttons">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>

          <p className="signup-bottom-p">
            Already have an account? <a href="./Login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
