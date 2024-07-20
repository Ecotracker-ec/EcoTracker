import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./style/indexSignup.css";
import "./style/responsive.css";


const Signup = () => {
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
            <h2>Welcome!</h2>
            <p>Please enter your details</p>
            <form>
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
