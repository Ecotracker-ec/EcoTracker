import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import axios from 'axios';
import './style/indexdashboard.css';
import Navbar from "./Navbar";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
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
        console.log(emissionsData.length);
        setData(emissionsData);
        if(emissionsData.length=='0' || emissionsData.length==0){
          alert("Atleast add one emission to check dashboard");
          window.location.href = "/calculator";
        }
        const totals = emissionsData.reduce((accumulator, currentValue) => {
          return {
            electricity: (accumulator.electricity || 0) + currentValue.electricity * 0.82,
            gasusage: (accumulator.gasusage || 0) + currentValue.gasusage * 22.73,
            wood: (accumulator.wood || 0) + currentValue.wood * 6.4,
            priv: (accumulator.priv || 0) + currentValue.priv / 36.6,
            waste: (accumulator.waste || 0) + currentValue.waste * 1.49 * 4,
            meals: (accumulator.meals || 0) + currentValue.meals * 10,
            renewunit: (accumulator.renewunit || 0) + currentValue.renewunit * 0.82,
            totalemission: (accumulator.totalemission || 0) + currentValue.totalemission,
          };
        }, {});
        const totalEmissions = emissionsData.map(item => item.totalemission);
        setTotalemms(totalEmissions);
        setTotalValues(totals);

        const avgEmissions = emissionsData.reduce((sum, item) => sum + item.totalemission, 0) / emissionsData.length;
        setCityAvg(avgEmissions);

        // Generate advice based on total values
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

  // Data for totalemission vs renewunit pie chart
  const totalEmissionVsRenewunitData = {
    totalemission: totalValues.totalemission || 0,
    renewunit: totalValues.renewunit || 0
  };

  return (
    <div class='m'>
      <div className='nav'>
        <Navbar/>
      </div>
      <div className="dashboard">
        <div className="line">
          <h1>Emissions Line Chart</h1>
          <LineChartComponent emissionsData={totalemms} cityAvg={user?.cityAvg * 1000 / 12} />
        </div>
        <div className="pie">
          <div className='pie1'>
          <h1>Emissions Pie Chart</h1>
          <PieChartComponent data={pieChartData} />
          </div>
          <div className='pie2'>
          <h1>Total Emissions vs Renewable Units Pie Chart</h1>
          <PieChartComponent data={totalEmissionVsRenewunitData} />
          </div>
        </div>
        <div className="advice">
          <h1>Personalized Advice</h1>
          <ul>
            {advice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Advice function
const getAdvice = (totalValues) => {
  const advice = [];

  // Electricity consumption advice
  if (totalValues.electricity > 1000) {
    advice.push("Consider reducing electricity consumption by using energy-efficient appliances.");
  }

  // Gas usage advice
  if (totalValues.gasusage > 500) {
    advice.push("Reduce gas usage by opting for energy-efficient heating systems.");
  }

  // Wood usage advice
  if (totalValues.wood > 50) {
    advice.push("Try to minimize wood usage and explore alternative heating sources.");
  }

  // Private transport advice
  if (totalValues.priv > 100) {
    advice.push("Reduce private transport usage and consider carpooling or public transportation.");
  }

  // Waste advice
  if (totalValues.waste > 200) {
    advice.push("Increase recycling efforts and reduce waste production.");
  }

  // Meals advice
  if (totalValues.meals > 20) {
    advice.push("Opt for a more sustainable diet with fewer meat-based meals.");
  }

  // Renewable units advice
  if (totalValues.renewunit < 50) {
    advice.push("Increase the use of renewable energy sources to reduce overall emissions.");
  }

  return advice;
};

export default Dashboard;
