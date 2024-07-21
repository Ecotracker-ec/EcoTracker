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
  const [pass,setpass] =useState("");
  const [email,setemail] =useState("");
  const [username,setusername] =useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const handlepassChange = (e) => {
    setpass(e.target.value);
  };
  const handlemailChange = (e) => {
    setemail(e.target.value);
  };
  const handlenameChange = (e) => {
    setusername(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('email', email)
      const resp = await axios.post('domainName/auth/register', { email: email, password: pass , name: username});
      console.log(resp.data)
      navigate('/userinfo');
    } catch (error) {
      console.log(error.resp)
    }
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
              <input type="text" name="username" value={username} onChange={handlenameChange} placeholder="Enter your name" required/>
              <input type="email" name="email" value={email} onChange={handlemailChange} placeholder="Enter a valid email" required/>
              <div className="pass-input-div">
                <input name="pass" value={pass} onChange={handlepassChange} type={showPassword ? "text" : "password"} placeholder=" Create Password" required/>
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
