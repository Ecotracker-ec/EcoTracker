import React, { useEffect, useRef, useState } from "react";
import { Hero } from '.'
import Navbarlo from "./Navbarlogout";
import { industry, analysis } from '../assets'
import './homepage.css';
import Footer from "./Footer";

function Home() {
  return (
    <div className='back'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center h-[700px]'>
        <Navbarlo />
        <Hero />
      </div>
      <div className="relative w-full bg-black pb-10">
        <img src={industry} alt='Industry' className='h-[500px] w-full object-bottom mt-5'/>
        <div className='text-center text-[22px] md:text-[50px] mt-16 md:mt-20 text-white'>
          Our easy-to-use carbon footprint <br />calculator helps you understand <br />your carbon emissions
        </div>
        <div className='bg-[#e08616] w-[200px] md:w-[300px] h-[60px] md:h-[70px] flex items-center justify-center rounded-[50px] mx-auto mt-10'>
          <a href="aboutcf" className='text-[18px] md:text-[20px] text-black font-bold'>Find out more</a>
        </div>
      </div>
      <div className="relative w-full bg-[#e08616] pb-10">
        <img src={analysis} alt='Industry' className='md:h-[600px] w-full object-center object-contain md:object-cover  mt-10 md:mt-20'/>
        <div className='text-center font-bold text-[30px] md:text-[50px] mt-10 md:mt-20'>
          View <span className='text-[#4af41f]'>Analysis</span><br />and get <br /><span className='text-[#4af41f]'>Suggestions</span>
        </div>
        <div className='text-center text-[25px] m-10'>
          Comprehensive Analysis of your data <br />helps you understand your impact.
        </div>
      </div>
      <div>
      <Footer/>
      </div>
      
    </div>
  )
}

export default Home

