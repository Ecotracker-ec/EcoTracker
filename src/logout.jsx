import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./style/indexLogin.css";
import "./style/responsive.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    window.location.href = "/";
  return (
    <div>
        <p>Logging out...</p>
    </div>
  );
};

export default Logout;
