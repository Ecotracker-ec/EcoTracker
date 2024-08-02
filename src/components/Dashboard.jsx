import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import axios from 'axios';
import './style/indexdashboard.css';
import Navbar from "./Navbar";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import PieChartComponent2 from "./PieChartComponent2";
import Footer from "./Footer";
Chart.register(CategoryScale);

const Dashboard = () => {
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      alert("You need to login first to perform this action");
      window.location.href = "/login";
    }
  }, [userEmail]);

  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [totalValues, setTotalValues] = useState({});
  const [totalemms, setTotalemms] = useState([]);
  const [cityAvg, setCityAvg] = useState(0);
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emissionsResponse = await axios.get('https://ecotracker-t8em.onrender.com/calc/getEmissions', {
          headers: {
            'Authorization': token
          }
        });
        const emissionsData = emissionsResponse.data;
        setData(emissionsData);
        if(emissionsData.length=='0' || emissionsData.length==0){
          alert("Atleast add one emission to check dashboard");
          window.location.href = "/calculator";
        }
        const totals = emissionsData.reduce((accumulator, currentValue) => {
          return {
            Electricity: (accumulator.electricity || 0) + currentValue.electricity,
            gasusage: (accumulator.gasusage || 0) + currentValue.gasusage,
            wood: (accumulator.wood || 0) + currentValue.wood ,
            priv: (accumulator.priv || 0) + currentValue.priv ,
            waste: (accumulator.waste || 0) + currentValue.waste ,
            meals: (accumulator.meals || 0) + currentValue.meals ,
            renewunit: (accumulator.renewunit || 0) + currentValue.renewunit ,
            totalemission: (accumulator.totalemission || 0) + currentValue.totalemission,
          };
        }, {});
        const totalEmissions = emissionsData.map(item => item.totalemission);
        setTotalemms(totalEmissions);
        setTotalValues(totals);

        const avgEmissions = emissionsData.reduce((sum, item) => sum + item.totalemission, 0) / emissionsData.length;
        setCityAvg(avgEmissions);

        const userAdvice = getAdvice(totals);
        setAdvice(userAdvice);

      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('https://ecotracker-t8em.onrender.com/auth/getUser', {
          headers: {
            'Authorization': token
          }
        });
        setUser(res.data);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  console.log(user);

  // Create a new object without the totalemission key
  const pieChartData = { ...totalValues };
  delete pieChartData.totalemission;
  delete pieChartData.renewunit;

  // Data for totalemission vs renewunit pie chart
  const totalEmissionVsRenewunitData = {
    totalemission: totalValues.totalemission || 0,
    renewunit: totalValues.renewunit || 0
  };

  return (
    <div class='m bg-primary'>
      <div className='nav mb-20'>
        <Navbar/>
      </div>
      <div className="dashboard text-secondary text-[50px] font-bold" >Dashboard
        <div className="line">
          <h1 className="text-[18px] md:text-[30px] font-bold text-secondary " >Emissions Line Chart</h1>
          <LineChartComponent emissionsData={totalemms} cityAvg={user?.cityAvg * 1000 / 12} />
        </div>
        <div className="pie">
          <div className='pie1'>
          <h1 className='text-[30px] text-secondary '>Emissions Pie Chart</h1>
          <PieChartComponent data={pieChartData} />
          </div>
          <div className='pie2'>
          <h1 className='text-[30px] text-secondary '>Total Emissions vs Renewable Units</h1>
          <PieChartComponent2 data={totalEmissionVsRenewunitData} />
          </div>
        </div>
        <div className="advice">
          <h1 className='text-[30px] text-secondary font-bold mt-10'>Want to reduce emission??</h1>
          <h1 className='text-[30px] text-secondary font-bold '>Try these:</h1>
          <ul>
            {advice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

// Advice function
const getAdvice = (totalValues) => {
  const advice = [];

  // Electricity consumption advice
  if (totalValues.electricity > 1000) {
    advice.push("Reduce electricity consumption by using energy-saving bulbs and switching off appliances when not in use.");
  } else if (totalValues.electricity > 550) {
    advice.push("Use natural light during the day to reduce electricity usage.");
  } else if (totalValues.electricity > 200) {
    advice.push("Limit the use of high-energy appliances like irons and refrigerators to save on electricity.");
  } else if (totalValues.electricity > 100) {
    advice.push("Try to use fans instead of air conditioners to lower electricity consumption.");
  } else if (totalValues.electricity > 50) {
    advice.push("Share a single television or radio within the community to reduce overall electricity usage.");
  }

  // Gas usage advice
  if (totalValues.gasusage > 500) {
    advice.push("Reduce gas usage by cooking with covered pots to retain heat and cook faster.");
  } else if (totalValues.gasusage > 400) {
    advice.push("Cook larger meals at once and reheat as needed to save gas.");
  } else if (totalValues.gasusage > 300) {
    advice.push("Use firewood or biogas as alternative cooking fuels to reduce gas consumption.");
  } else if (totalValues.gasusage > 200) {
    advice.push("Maintain your stove to ensure efficient gas usage.");
  } else if (totalValues.gasusage > 100) {
    advice.push("Cook traditional meals that require less cooking time to save on gas.");
  }

  // Wood usage advice
  if (totalValues.wood > 50) {
    advice.push("Reduce wood usage by using efficient stoves that require less fuel.");
  } else if (totalValues.wood > 40) {
    advice.push("Collect and use fallen branches instead of cutting down trees for firewood.");
  } else if (totalValues.wood > 30) {
    advice.push("Practice community-based tree planting to ensure a sustainable supply of wood.");
  } else if (totalValues.wood > 20) {
    advice.push("Use crop residues or animal dung as alternatives to wood for cooking and heating.");
  } else if (totalValues.wood > 10) {
    advice.push("Build a simple mud stove to concentrate heat and reduce wood consumption.");
  }

  // Private transport advice
  if (totalValues.priv > 100) {
    advice.push("Reduce private transport usage by walking or cycling for short distances.");
  } else if (totalValues.priv > 80) {
    advice.push("Share rides with neighbors to reduce fuel consumption and costs.");
  } else if (totalValues.priv > 60) {
    advice.push("Use public transportation like buses or shared vehicles whenever possible.");
  } else if (totalValues.priv > 40) {
    advice.push("Organize community carpools to reduce the number of trips and save fuel.");
  } else if (totalValues.priv > 20) {
    advice.push("Limit travel to essential trips only to save on transportation costs and fuel.");
  }

  // Waste advice
  if (totalValues.waste > 200) {
    advice.push("Reduce waste by composting food scraps and using them as natural fertilizer.");
  } else if (totalValues.waste > 150) {
    advice.push("Reuse old containers and packaging materials for storage or other purposes.");
  } else if (totalValues.waste > 100) {
    advice.push("Repair broken items instead of throwing them away to reduce waste.");
  } else if (totalValues.waste > 50) {
    advice.push("Avoid unnecessary purchases to minimize waste generation.");
  } else if (totalValues.waste > 20) {
    advice.push("Use natural and biodegradable materials for daily needs to reduce waste.");
  }

  // Meals advice
  if (totalValues.meals > 20) {
    advice.push("Opt for locally-grown foods to support local farmers and reduce meal costs.");
  } else if (totalValues.meals > 15) {
    advice.push("Grow your own vegetables to reduce reliance on purchased")
  }


  return advice;
};

export default Dashboard;
