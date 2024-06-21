import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import Multiselect from "multiselect-react-dropdown";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Calculator = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState(['Air Travel','Bus','Train','Private Vehicle'])

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

  };

  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>
      <div className='bg-primary flex justify-center items-center pb-10'>
        <div className='mt-40'>
          <div
          className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
          <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[1.5] bg-black-100 p-8 rounded-2xl'
          >
          <h3 className={styles.sectionHeadText}>Carbon Footprint Calculator</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Select Month</span>
              <select name="month" id="months" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Select Year</span>
              <select name="year" id="year" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Select Region</span>
              <select name="area" id="area" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="urban">Urban</option>
                  <option value="rural">Rural</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>⚡Electricity used per month(KWh)</span>
              <input
                type='number'
                name='electricity'
                value={form.electricity}
                onChange={handleChange}
                placeholder=""
                min={0}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>🧯Type of Gas Connection</span>
              <select name="gas" id="gas" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="none">None</option>
                  <option value="gas-cylinder">Gas Cylinder</option>
                  <option value="gas-pipeline">Pipeline</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>🌳Wood used weekly(kg)</span>
              <input
                type='number'
                name='wood'
                value={form.wood}
                onChange={handleChange}
                placeholder=""
                min={0}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>🚚Transport (one or more)</span>
              <Multiselect 
                isObject={false}
                onRemove={(event) => {
                  console.log(event)
                }}
                onSelect={(event) => {
                  console.log(event)
                }}
                options={travel}
                className="bg-tertiary text-black"
              />

            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>🗑️Waste Generated(Kg) per week</span>
              <input
                type='number'
                name='waste'
                value={form.waste}
                onChange={handleChange}
                placeholder=""
                min={0}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>🍽️Meal preference</span>
              <select name="meal" id="meal" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="vegeterian">Vegeterian</option>
                  <option value="non-vegeterian">Non-Vegeterian</option>
              </select>
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Number of Meals per Day</span>
              <input
                type='number'
                name='meals'
                value={form.meals}
                onChange={handleChange}
                placeholder=""
                min={0}
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>♻️Any type of renewable energy generated</span>
              <select name="renewable" id="renewable" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
              </select>
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </motion.div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Calculator