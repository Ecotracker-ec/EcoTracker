import React, { useEffect, useState } from "react";
import Image from "../assets/LogoWithTextHorizontal.svg";
import Logo from "../assets/logo.svg";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const signup = () => {
  const [ showPassword, setShowPassword ] = useState(false);


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
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="signup-center-options">
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="signup-center-buttons">
                <button type="button">Log In</button>
              </div>
            </form>
          </div>

          <p className="signup-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
