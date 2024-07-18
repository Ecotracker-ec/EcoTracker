import React, { useEffect, useState } from "react";
import Image from "../assets/LogoWithTextHorizontal.svg";
import Logo from "../assets/logo.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const Privacy = () => {


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="logo" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="logo of EcoTracker" />
          </div>
          <div className="login-center">
            <h2>Privacy Policy</h2>
            <p>Effective Date: 1 July 2024</p>

            <li class="small-bullet">Introduction</li>
            <div className="det">
              <p>Welcome to EcoTracker. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our <a href="#">website</a> and use our services, including our carbon footprint calculator.</p>
            </div>

            <li class="small-bullet">Information We Collect</li>
            <div className="det">
              <p>We may collect and process the following types of information:</p>
              <p>Personal Information:</p>
              <p><li>Name</li>
                <li>Email address</li>
                <li>Household size</li>
                <li>Energy usage</li>
                <li>Vehicle information</li>
                <li>Dietary preferences</li></p>
            </div>
            <li class="small-bullet">How We Use Your Information</li>
            <div className="det">
              <p>We use the information we collect in the following ways:</p>
              <p>
                <li>To provide and maintain our services</li>
                <li>To calculate your carbon footprint and provide personalized suggestions</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li></p>
            </div>
            <li class="small-bullet">Sharing Your Information</li>
            <div className="det">
              <p>We do not sell, trade, or otherwise transfer to outside parties your personal information except as described below:</p>
              <p>Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as hosting and data analysis.</p>
            </div>
            <li class="small-bullet">Your Rights</li>
            <div className="det">
              <p>The right to correct any inaccuracies in your personal information
                The right to request the deletion of your personal information
                To exercise any of these rights, please contact us at <a href="mailto:ecotracker.ec@gmail.com">ecotracker.ec@gmail.com</a>.</p>
            </div>
            <li class="small-bullet">Changes to This Privacy Policy</li>
            <div className="det">
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </div>
            <li class="small-bullet"> Contact Us</li>
            <div className="det">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <p>
                <li>By email: <a href="mailto:ecotracker.ec@gmail.com">ecotracker.ec@gmail.com</a></li>
                <li>By visiting this page on our website: <a href="#">Contact Us</a></li></p>
            </div>

          </div>
        </div>
      </div >
    </div >
  );
};

export default Privacy;
