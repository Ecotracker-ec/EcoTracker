import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import "./style/indexSignup.css";
import "./style/responsive.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the backend
      const resp = await axios.post('https://ecotracker-t8em.onrender.com/auth/register', {
        email: email,
        password: pass,
        name: username
      });

      // Handle successful response
      console.log(resp.data);
      localStorage.setItem('userEmail', email); 
      navigate('/userinfo'); 
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-left">
        <img src={Image} alt="Logo" />
      </div>
      <div className="signup-right">
        <div className="signup-right-container">
          <div className="signup-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="signup-center">
            <h2>Sign Up!</h2>
            <p><br />Welcome<br />Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter a valid email"
                required
              />
              <div className="pass-input-div">
                <input
                  name="pass"
                  value={pass}
                  onChange={handlePassChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
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
