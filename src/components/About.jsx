import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceCard = ({ index, title, icon, val }) => {
  const userEmail = localStorage.getItem("userEmail");
  useEffect(() => {
    if (!userEmail) {
      alert("You need to login first to perform this action");
      window.location.href = "/login";
    }
  }, [userEmail]);
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => {
          window.scrollTo(0, val);
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="bg-primary flex justify-center items-center pb-10">
        <div className="mt-40 ml-20">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            A carbon footprint measures the total amount of greenhouse gases
            (GHGs), mainly carbon dioxide (CO2), released due to our activities.
            Greenhouse gases trap heat in the atmosphere, contributing to
            climate change. Reducing our footprint helps combat this global
            challenge. By calculating our footprint, we can identify areas for
            improvement and make conscious choices to minimize our impact on the
            planet.
          </motion.p>
          <div className="mt-20 flex flex-wrap gap-10 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
          <h3 className={styles.sectionHeadText}>Climate Change</h3>
          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px] mb-20"
          >
            Impacts of Increased Carbon Footprint on Climate : <br />
            <br /> 1. <span className="font-bold">Global Warming</span>:
            Increased greenhouse gas emissions trap more heat in the Earth's
            atmosphere, leading to higher global temperatures. This phenomenon
            is known as global warming. <br /> <br />
            2. <span className="font-bold">Sea Level Rise</span>: Melting polar
            ice caps and glaciers, along with the thermal expansion of seawater,
            contribute to rising sea levels. This can lead to coastal erosion,
            flooding, and habitat loss. <br />
            <br /> 3. <span className="font-bold">Extreme Weather Events</span>:
            Higher temperatures can lead to more intense and frequent extreme
            weather events, such as hurricanes, droughts, heatwaves, and heavy
            rainfall. <br />
            <br /> 4. <span className="font-bold">Ocean Acidification</span>:
            CO2 absorbed by the oceans forms carbonic acid, leading to a
            decrease in pH levels. This acidification can harm marine life,
            particularly organisms with calcium carbonate shells or skeletons,
            such as corals and shellfish.
          </motion.p>
          <h3 className={styles.sectionHeadText}>Personal Responsilibilty</h3>
          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px] mb-20"
          >
            Individuals can play a significant role in reducing carbon emissions
            through various actions and lifestyle changes. Here are some ways
            people can contribute to lowering their carbon footprint: <br />
            <br /> 1. <span className="font-bold">
              Energy Efficiency
            </span> : <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                Use Energy-Efficient Appliances: Opt for appliances with high
                energy efficiency ratings (such as Energy Star) to reduce
                electricity consumption.
              </li>
              <li>
                Switch to LED Bulbs: LED bulbs use less energy and last longer
                than traditional incandescent bulbs.
              </li>
            </ul>
            <br />
            <br />
            2. <span className="font-bold">Transportation</span> : <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                Use Public Transport: Taking buses, trains, or subways reduces
                the number of individual cars on the road.
              </li>
              <li>
                Electric and Hybrid Vehicles: Switching to electric or hybrid
                vehicles can significantly cut down on fossil fuel use and
                emissions.
              </li>
            </ul>
            <br />
            <br />
            3. <span className="font-bold">
              Home and Lifestyle Choices
            </span> : <br />
            <br />
            <ul className="list-disc list-inside">
              <li>
                Renewable Energy: Installing solar panels or choosing a green
                energy provider can reduce reliance on fossil fuels.
              </li>
              <li>
                Plant Trees: Trees absorb CO2 and provide oxygen. Planting trees
                in your community or supporting reforestation projects can help
                sequester carbon.
              </li>
            </ul>
            <br />
            <br />
          </motion.p>
          <h3 className={styles.sectionHeadText}>Consumer Awareness</h3>
          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px] mb-20"
          > 
            <ul className="list-disc list-inside">
              <li>Users provide information about their daily activities, including transportation methods, energy use at home, dietary habits, and waste management. The website calculates the user’s carbon footprint based on the provided data, offering a personalized assessment of their emissions.</li><br />
              <li> The calculator often provides a detailed breakdown of emissions by category (e.g., transportation, home energy, food, and waste), helping users understand which activities contribute most to their carbon footprint.</li><br />
              <li> Visual tools such as bar graphs, pie charts, and trend lines illustrate the user’s carbon footprint, making the data easier to comprehend. Users can compare their carbon footprint to various benchmarks, such as the average footprint in their country or globally, or the levels needed to meet climate goals.</li>
            </ul>
          </motion.p>
          <h3 className={styles.sectionHeadText}>Policy & Regulation</h3>
          <motion.p
            variants={fadeIn(" ", " ", 0.1, 1)}
            className="mt-4 text-secondary text-[20px] max-w-4xl leading-[30px] mb-20"
          >
            <p>As a Repsonsible Citizens of India you should know these Policies and Schemes proposed by Indian Government :</p> <br />
            <ul className="list-decimal list-inside">
              <li><span className="font-bold">National Action Plan on Climate Change (NAPCC)</span>: Promotes the development and use of solar energy for power generation and other applications. Focuses on promoting energy efficiency in urban planning, including waste management and public transportation.</li><br />
              <li><span className="font-bold">Energy Efficiency Programs</span>: Perform, Achieve and Trade (PAT) Scheme is a market-based mechanism to enhance energy efficiency in large industries. Promotes energy-efficient appliances and equipment through labeling and standards.</li><br />
              <li><span className="font-bold">Carbon Pricing and Market Mechanisms</span>: India participates in the CDM under the Kyoto Protocol, which allows for the implementation of emission-reduction projects that earn certified emission reduction (CER) credits.</li><br />
              <li><span className="font-bold">International Commitments and Agreements</span>: Perform, Achieve and Trade (PAT) Scheme is a market-based mechanism to enhance energy efficiency in large industries. Promotes energy-efficient appliances and equipment through labeling and standards.</li>
            </ul>
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;