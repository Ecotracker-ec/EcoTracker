import React, { useEffect, useState } from "react";
import Image from "./assets/LogoWithTextHorizontal.svg";
import Logo from "./assets/logo.svg";
import prof from "./assets/profanurag.svg";
import ankit from "./assets/Ankit.svg";
import deep from "./assets/Deep.svg";
import devu from "./assets/Devu.svg";
import khoshang from "./assets/Khoshang.jpg";
import kunal from "./assets/Kunal.svg";
import web from "./assets/Website.svg";
import linkedin from "./assets/Linkedin.svg";
import github from "./assets/github.svg";
import Navbarlo from "./Navbarlogout";
import "./style/indexaboutus.css";
import "./style/responsive.css";
import Footer from "./Footer";

const Aboutuslo = () => {


  return (
    <div className="privacy-main">
      <Navbarlo/>
      <div className="privacy-right">
        <div className="privacy-right-container">
          <div className="privacy-center">
            <h2>About Us</h2>
            <li class="small-bullet">Mentor</li>
            <div className="photo">
              <div className="image">
                <img src={prof} alt="Mentor- Prof Anurag Srivastava" class="bigimage" />
              </div>
              <div className="info">
                <p><b>Prof. Anurag Srivastava</b></p>
                <p>Department of Engineering Sciences, ABV-IIITM</p>
                <p>Prof. Anurag played a pivotal role in our journey. He offered his invaluable guidance and expertise. His mentorship helped us navigate challenges and pushed us to create Ecotracker.</p>
                <div class="links">
                  <a href="https://profanurag.in/"><img src={web} alt="website" class="smallimg" /></a>
                  <a href="https://www.linkedin.com/in/anurag-srivastava-2a4b097/"><img src={linkedin} alt="website" class="smallimg" /></a>
                </div>
              </div>
            </div>
            <li class="small-bullet">Collabarators</li>
            <div className="photo">
              <div className="image">
                <img src={ankit} alt="Ankit Baidsen" class="bigimage"/>
              </div>
              <div className="info">
                <p><b>Ankit Baidsen</b></p>
                <p>Backend : Database Management, Testing</p>
                <p>Ankit is responsible for managing everything related to the backend infrastructure. His expertise ensured that our data handling was both efficient and secure, making sure the calculations are processed smoothly.</p>
                <div class="links">
                  <a href="https://linkedin.com/in/ankit-baidsen-202106290/"><img src={linkedin} alt="website" class="smallimg" /></a>
                  <a href="https://github.com/neetance"><img src={github} alt="website" class="smallimg" /></a>
                </div>
              </div>
            </div>
            <div className="photo">
              <div className="image">
                <img src={deep} alt="Deep Patel" class="bigimage"/>
              </div>
              <div className="info">
                <p><b>Deep Patel</b></p>
                <p>Frontend</p>
                <p>Deep brought EcoTracker to life with his frontend skills. His ability to create a seamless and intuitive user experience was vital in making our project accessible to users of all backgrounds.</p>
                <div class="links">
                  <a href="https://www.linkedin.com/in/deep-patel-5b3912207/"><img src={linkedin} alt="website" class="smallimg" /></a>
                  <a href="https://github.com/deeplegend"><img src={github} alt="website" class="smallimg" /></a>
                </div>

              </div>
            </div><div className="photo">
              <div className="image">
                <img src={devu} alt="Devu Gupta" class="bigimage"/>
              </div>
              <div className="info">
                <p><b>Devu Gupta</b></p>
                <p>Backend : Calculation</p>
                <p>Devu specialized in developing the backend logic for our carbon footprint calculator. He ensured that our calculations were accurate, providing users with the insights they need to make eco-friendly choices</p>
                <div class="links">
                  <a href="https://www.linkedin.com/in/devugupta/"><img src={linkedin} alt="website" class="smallimg" /></a>
                  <a href="https://github.com/Codealpha07"><img src={github} alt="website" class="smallimg" /></a>
                </div>
              </div>
            </div><div className="photo">
              <div className="image">
                <img src={khoshang} alt="Khoshang Kashyap" class="bigimage"/>
              </div>
              <div className="info">
                <p><b>Khoshang Kashyap</b></p>
                <p>Frontend, Backend, Testing</p>
                <p>Khoshang wore many hats, from working on both the frontend and backend to rigorously testing every aspect of the project.He assured that the project maintained high standards of quality.</p>
                <div class="links">
                  <a href="https://www.linkedin.com/in/khoshang/"><img src={linkedin} alt="website" class="smallimg" /></a>
                  <a href="https://github.com/khoshang-k"><img src={github} alt="website" class="smallimg" /></a>
                </div>
              </div>
            </div><div className="photo">
              <div className="image">
                <img src={kunal} alt="Kunal Agrawal" class="bigimage"/>
              </div>
              <div className="info">
                <p><b>Kunal Agrawal</b></p>
                <p>Frontend: Styling(UI/UX)</p>
                <p>Kunal's creativity and design sensibilities shaped the look and feel of EcoTracker. His focus on user experience ensured that the platform is not only functional but also engaging and easy to navigate.</p>
                <div class="links">
                  <a href="https://www.linkedin.com/in/kunalagrawal1/"><img src={linkedin} alt="website" class="smallimg" /></a>
                  <a href="https://github.com/Kunal-8799"><img src={github} alt="website" class="smallimg" /></a>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </div>
  );
};

export default Aboutuslo;
