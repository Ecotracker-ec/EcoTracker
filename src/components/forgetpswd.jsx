import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./style/indexforgetpswd.css";
import "./style/responsive.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Forgetpswd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mail, setmail] = useState("");
  const handlemailChange = (e) => {
    setmail(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post('https://ecotracker-t8em.onrender.com/auth/forgotPass', { email: mail });
      console.log(resp.data);
      navigate('/login');
    } catch (error) {
      console.log(error.resp)
    }

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
                <input type="email" value={mail} onChange={handlemailChange}placeholder="Enter registered email" required />
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
