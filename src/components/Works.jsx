import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
          <p className='mt-2 text-secondary text-[14px] text-center'>{description}</p>
          <div className="bg-[#4af41f] w-[80px] h-[25px] text-center ml-13 rounded-[10px]">
            <button className="text-center text-black">Redeem</button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar/>
      <div className='mt-20 ml-40'>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Rewards</h2>
          <p className={`${styles.sectionSubText} `}>Spend Wisely</p>
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        
      </div><br /><br /><br /><br /><br /><br />
      <Footer/>
     </div>
  );
};

export default Works