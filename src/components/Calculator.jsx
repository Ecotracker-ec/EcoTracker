import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { useNavigate } from 'react-router-dom';
import { slideIn } from "../utils/motion";
import Multiselect from "multiselect-react-dropdown";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";


const Calculator = () => {
  const userEmail = localStorage.getItem('userEmail');
  const token = localStorage.getItem('token');
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2020");
  const [region, setRegion] = useState("Urban");
  const [electricity, setElectricity] = useState("0");
  const [gastype, setGtype] = useState("Gas Pipeline");
  const [gasusage, setGusage] = useState("0");
  const [wood, setWood] = useState("0");
  const [priv, setPriv] = useState("0");
  const [waste, setWaste] = useState("0");
  const [mealtype, setMtype] = useState("vegeterian");
  const [meals, setMeal] = useState("0");
  const [renewtype, setRtype] = useState("No");
  const [renewunits, setrenew] = useState("0");
  const navigate = useNavigate();
  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      alert("You need to login first to perform this action");
      window.location.href = "/login";
    }
  }, [userEmail]);
  const formRef = useRef();

  const chmonth = (e) => {
    setMonth(e.target.value)
  }
  const chyear = (e) => {
    setYear(e.target.value)
  }
  const chreg = (e) => {
    setRegion(e.target.value)
  }
  const chelec = (e) => {
    setElectricity(e.target.value)
  }
  const chgtype = (e) => {
    setGtype(e.target.value)
  }
  const chgasuse = (e) => {
    setGusage(e.target.value)
  }
  const chwood = (e) => {
    setWood(e.target.value)
  }
  const chpriv = (e) => {
    setPriv(e.target.value)
  }
  const chwaste = (e) => {
    setWaste(e.target.value)
  }
  const chmtype = (e) => {
    setMtype(e.target.value)
  }
  const chmeal = (e) => {
    setMeal(e.target.value)
  }
  const chrent = (e) => {
    setRtype(e.target.value)
  }
  const chrenew = (e) => {
    setrenew(e.target.value)
  }

  const [loading, setLoading] = useState(false);
  const points = ({a,b}) => {
    if(a>=b){
      return 0;
    }
    const p=0,mul=4;
    const x= b-a;
    while(x>1){
      p=p+((x%10)*mul);
      x=x/10;
      mul*=4;
    }
    return p;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the backend
      console.log(token);
      const resp = await axios.post('https://ecotracker-t8em.onrender.com/calc/', {
        month: month,
        year: year,
        area: region,
        electricity: electricity,
        gas: gastype,
        gasusage: gasusage,
        wood: wood,
        priv: priv,
        waste: waste,
        meal: mealtype,
        meals: meals,
        renewable: renewtype,
        renewunit: renewunits,
      }, {
        headers: {
          'Authorization': token, // Set the Authorization header
        }
      });
      const emissionsResponse = await axios.get('https://ecotracker-t8em.onrender.com/calc/getEmissions', {
        headers: {
          'Authorization': token
        }
      });
      const emissionsData = emissionsResponse.data;
      const lastemission=0;
      if(emissionsData.legnth>1){
        lastemission=emissionsData[1].totalemission;
      }
      const resp2 = await axios.post('https://ecotracker-t8em.onrender.com/auth/coins', {
        numCorrect: (points(emissionsData[0].totalemission,lastemission) / 2),
      }, {
        headers: {
          'Authorization': token // Set the Authorization header
        }
      });
      console.log(points(emissionsData[0].totalemission,lastemission),emissionsData[0].totalemission,lastemission);
      navigate('/dashboard'); 
    } catch (error) {
      if(error.message=="Request failed with status code 400"){
        alert("Emission data for this month and year already exists");
      }
      console.log(error.message);
      console.error("Error during storing data", error);
    }
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
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Select Month</span>
                  <select name="month" id="months" value={month} onChange={chmonth} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Select Year</span>
                  <select name="year" id="year" value={year} onChange={chyear} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Select Region</span>
                  <select name="area" id="area" value={region} onChange={chreg} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="urban">Urban</option>
                    <option value="rural">Rural</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>⚡Electricity used per month(KWh)</span>
                  <input
                    type='number'
                    name='electricity'
                    value={electricity}
                    onChange={chelec}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🧯Type of Gas Connection</span>
                  <select name="gas" id="gas" value={gastype} onChange={chgtype} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'> 
                    <option value="gas-cylinder">Gas Cylinder</option>
                    <option value="gas-pipeline">Pipeline</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Number of Units used per month</span>
                  <input
                    type='number'
                    name='gasusage'
                    value={gasusage}
                    onChange={chgasuse}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🌳Wood used weekly(kg)</span>
                  <input
                    type='number'
                    name='wood'
                    value={wood}
                    onChange={chwood}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🚚Private vehicle usage in km</span>
                  <input
                    type='number'
                    name='priv'
                    value={priv}
                    onChange={chpriv}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />

                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🗑️Waste Generated(Kg) per week</span>
                  <input
                    type='number'
                    name='waste'
                    value={waste}
                    onChange={chwaste}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🍽️Meal preference</span>
                  <select name="meal" id="meal" value={mealtype} onChange={chmtype} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="vegeterian">Vegeterian</option>
                    <option value="non-vegeterian">Non-Vegeterian</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Number of Meals per Day</span>
                  <input
                    type='number'
                    name='meals'
                    value={meals}
                    onChange={chmeal}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>♻️Any type of renewable energy generated</span>
                  <select name="renewable" id="renewable" value={renewtype} onChange={chrent} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Number of Units produced per month</span>
                  <input
                    type='number'
                    name='renewunit'
                    value={renewunits}
                    onChange={chrenew}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>

                <button
                  type='submit'
                  className='bg-red-500 hover:bg-red-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                  {loading ? "Submiting..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator
