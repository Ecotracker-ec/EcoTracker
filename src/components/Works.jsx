import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import axios from 'axios';
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';


const Works = () => {
  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('userEmail');
  const [coin, SetCoin] = useState("0");
  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      // window.location.href = "/login";
    }
  }, [userEmail]);
  const [user, setUser] = useState(null);
  console.log(token);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('https://ecotracker-t8em.onrender.com/auth/getUser', {
          headers: {
            'Authorization': token
          }
        });
        setUser(res.data);
        SetCoin(res.data.coins);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className='mt-20 ml-10 md:ml-60'>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Rewards</h2>
          <p className={`${styles.sectionSubText} `}>Spend Wisely</p>
          <br></br>
          {user ? (
            <p className={`${styles.sectionSubText} `}>🌳Points {coin}</p>
          ) : (
            <p className={`${styles.sectionSubText} `}>Loading points...</p>
          )}
        </motion.div>

        <div className='mt-10 md:mt-20 mr-10 mb-10 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('userEmail');
  const [coin, SetCoin] = useState("0");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('https://ecotracker-t8em.onrender.com/auth/getUser', {
          headers: {
            'Authorization': token
          }
        });
        setUser(res.data);
        SetCoin(res.data.coins);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    fetchUser();
  }, [token]);
  const redeemButton = async (e) => {
    console.log(user.coins, description);
    if (user.coins >= description) {
      try {
        console.log(token);
        console.log(userEmail);
        const resp = await axios.post('https://ecotracker-t8em.onrender.com/auth/coins', {
          numCorrect: -(description / 2),
        }, {
          headers: {
            'Authorization': token // Set the Authorization header
          }
        });
        console.log(description);
        window.location.href = "/reward";
      } catch (error) {
        console.error("Error during storing data", error);
      }
    }
    else {
      alert("Insufficient coins!");
    }
  }
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] text-center'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-center'>Cost: {description} </p>
          <div className="bg-[#4af41f] w-[80px] h-[25px] text-center ml-13 rounded-[10px]">
            <button className="text-center text-black" onClick={redeemButton}>Redeem</button>
          </div>
        </div>

      </Tilt>
    </motion.div>
  );
};

export default Works;
