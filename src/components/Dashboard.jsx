import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import axios from 'axios';
import './style/indexdashboard.css';
import Navbar from "./Navbar";
import App from "./chart.jsx"
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
  const [topEmissions, setTopEmissions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [user, setUser] = useState(null);

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

        // Calculate total values for each parameter
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
        setTotalValues(totals);

      } catch (err) {
        console.log(err);
      }
    };

    const fetchUser = async () => {
      try {
        const userResponse = await axios.get('https://ecotracker-t8em.onrender.com/auth/getUser', {
          headers: {
            'Authorization': token
          }
        });
        setUser(userResponse.data);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    if (token) {
      fetchData();
      fetchUser();
    }
  }, [token]);

  

    return (
      <div>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div> */}
        <div className="dashboard">
          <h2>Dashboard</h2>
          <p>Total Electricity: {totalValues.electricity}</p>
          <p>Total Gas Usage: {totalValues.gasusage}</p>
          <p>Total Wood: {totalValues.wood}</p>
          <p>Total Private Transport: {totalValues.priv}</p>
          <p>Total Waste: {totalValues.waste}</p>
          <p>Total Meals: {totalValues.meals}</p>
          <p>Total Renewable Units: {totalValues.renewunit}</p>
          <p>Total Emissions: {totalValues.totalemission}</p>
          {/* Add your chart components here */}
        </div>
        <App/>
      </div>
    );
  };

  export default Dashboard;
