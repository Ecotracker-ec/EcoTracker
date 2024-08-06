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
  const [woodname, setWoodname] = useState("");
  const [distva, setDistva] = useState("0");
  const [nameva, setNameva] = useState("");
  const [oldva, setOldva] = useState("0");
  const [milva, setMilva] = useState("0");
  const [fuelva, setFuelva] = useState("petrol");
  const [distvb, setDistvb] = useState("0");
  const [namevb, setNamevb] = useState("");
  const [oldvb, setOldvb] = useState("0");
  const [milvb, setMilvb] = useState("0");
  const [fuelvb, setFuelvb] = useState("petrol");
  const [wastes, setWastes] = useState("0");
  const [wastew, setWastew] = useState("0");
  const [mealtype, setMtype] = useState("vegeterian");
  const [meals, setMeal] = useState("0");
  const [renewtype, setRtype] = useState("No");
  const [wastetype, setWtype] = useState("No");
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
  const chwoodname = (e) => {
    setWoodname(e.target.value)
  }
  const chnameva = (e) => {
    setNameva(e.target.value)
  }
  const choldva = (e) => {
    setOldva(e.target.value)
  }
  const chdistva = (e) => {
    setDistva(e.target.value)
  }
  const chmilva = (e) => {
    setMilva(e.target.value)
  }
  const chfuelva = (e) => {
    setFuelva(e.target.value)
  }
  const chnamevb = (e) => {
    setNamevb(e.target.value)
  }
  const choldvb = (e) => {
    setOldvb(e.target.value)
  }
  const chdistvb = (e) => {
    setDistvb(e.target.value)
  }
  const chmilvb = (e) => {
    setMilvb(e.target.value)
  }
  const chfuelvb = (e) => {
    setFuelvb(e.target.value)
  }
  const chwastes = (e) => {
    setWastes(e.target.value)
  }
  const chwastew = (e) => {
    setWastew(e.target.value)
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
  const chwastet = (e) => {
    setWtype(e.target.value)
  }
  const chrenew = (e) => {
    setrenew(e.target.value)
  }

  const [loading, setLoading] = useState(false);
  const points = ({ a, b }) => {
    if (a >= b) {
      return 0;
    }
    let p = 0, mul = 4;
    let x = b - a;
    while (x > 1) {
      p = p + ((x % 10) * mul);
      x = x / 10;
      mul *= 4;
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
        woodname: woodname, //name of wood used - string
        wood: wood,
        priv_name_a:nameva, //name of vehicle-string
        priv_old_a:oldva, //age of vehicle-number
        priv_fuel_a:fuelva, //fuel type string(petrol/diesel)
        priv_mileage_a:milva, //mileage -number
        priv_dist_a:distva, //distance number
        priv_name_b:namevb, //same for vehicle num 2
        priv_old_b:oldvb,
        priv_fuel_b:fuelvb,
        priv_mileage_b:milvb,
        priv_dist_b:distvb,
        wastetype: wastetype,
        waste: wastes, //waste quantity
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
      console.log(emissionsData);
      console.log(emissionsData.length);
      let lastemission = 0;
      if (emissionsData.length > 1) {
        lastemission = emissionsData[1].totalemission;
      }
      const resp2 = await axios.post('https://ecotracker-t8em.onrender.com/auth/coins', {
        numCorrect: (points(emissionsData[0].totalemission, lastemission) / 2),
      }, {
        headers: {
          'Authorization': token // Set the Authorization header
        }
      });
      const dif = lastemission - emissionsData[0].totalemission;
      alert('Your emission went down by ' + dif + '.');
      alert('You got ' + points(emissionsData[0].totalemission, lastemission) + ' points.');
      console.log(points(emissionsData[0].totalemission, lastemission), emissionsData[0].totalemission, lastemission);
      navigate('/dashboard');
    } catch (error) {
      if (error.message == "Request failed with status code 400") {
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
                <hr></hr>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>⚡Electricity used per month(KWh)</span>
                  <p className='text-white text-xs py-3'>Electricity details can be found on your Electricity bill under heading "Units used".</p>
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
                  <p className='text-white text-xs py-3'>Gas usage details can be found on your Gas bill under heading "Units used".</p>
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
                  <span className='text-white font-medium mb-4'>Type of wood used</span>
                  <input
                    type='text'
                    name='woodname'
                    value={woodname}
                    onChange={chwoodname}
                    placeholder="eg: Oak, Birch, Mango"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <hr></hr>
                <h1 className='text-white'>Private Travel</h1>
                <h2 className='text-white'>Vehicle Number 1:</h2>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Vehicle Name and company</span>
                  <p className='text-white text-xs py-3'>Mention the model name then company name. eg: Celerio, Maruti </p>
                  <input
                    type='text'
                    name='priv'
                    value={nameva}
                    onChange={chnameva}
                    placeholder=""
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>How old is Vehicle?</span>
                  <select name="oldva" id="oldva" value={oldva} onChange={choldva} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">15+</option>
                  </select>

                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Fuel?</span>
                  <select name="meal" id="meal" value={fuelva} onChange={chfuelva} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Average mileage</span>
                  <input
                    type='number'
                    name='priv'
                    value={milva}
                    onChange={chmilva}
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
                    value={distva}
                    onChange={chdistva}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />

                </label>
                <h2 className='text-white'>Vehicle Number 2:</h2>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Vehicle Name and company</span>
                  <p className='text-white text-xs py-3'>Mention the model name then company name. eg: Celerio, Maruti </p>
                  <input
                    type='text'
                    name='priv'
                    value={namevb}
                    onChange={chnamevb}
                    placeholder=""
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>How old is Vehicle?</span>
                  <select name="oldva" id="oldva" value={oldvb} onChange={choldvb} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">15+</option>
                  </select>

                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Fuel?</span>
                  <select name="meal" id="meal" value={fuelvb} onChange={chfuelvb} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Average mileage</span>
                  <input
                    type='number'
                    name='priv'
                    value={milvb}
                    onChange={chmilvb}
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
                    value={distvb}
                    onChange={chdistvb}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />

                </label>
                <hr></hr>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Do you seperate solid and liquid waste?</span>
                  <select name="renewable" id="renewable" value={wastetype} onChange={chwastet} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🗑️ Solid Waste Generated(Kg) per week</span>
                  <input
                    type='number'
                    name='waste'
                    value={wastes}
                    onChange={chwastes}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>🗑️Wet Waste Generated(Kg) per week</span>
                  <input
                    type='number'
                    name='waste'
                    value={wastew}
                    onChange={chwastew}
                    placeholder=""
                    min={0}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <hr></hr>
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
                <hr></hr>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>♻️Any type of renewable energy generated</span>
                  <select name="renewable" id="renewable" value={renewtype} onChange={chrent} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
                    <option value="no">No</option>
                    <option value="yes">Solar power</option>
                    <option value="yes">Biogas plant</option>
                  </select>
                </label>
                <label className='flex flex-col self-stretch'>
                  <span className='text-white font-medium mb-4'>Number of Units produced per month</span>
                  <p className='text-white text-xs py-3'>Mentioned in bills provided by power companies</p>
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
