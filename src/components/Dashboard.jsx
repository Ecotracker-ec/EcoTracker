import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from 'recharts';
import axios from 'axios';
import './style/indexdashboard.css';

const Dashboard = () => {
  const userEmail = localStorage.getItem('userEmail');
  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      alert("You need to login first to perform this action");
      window.location.href = "/login";
    }
  }, [userEmail]);
  const [data, setData] = useState([]);
  const [topEmissions, setTopEmissions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  

  const allMonths = [
    { month: 'January', year: 2024 },
    { month: 'February', year: 2024 },
    { month: 'March', year: 2024 },
    { month: 'April', year: 2024 },
    { month: 'May', year: 2024 },
    { month: 'June', year: 2024 },
    { month: 'July', year: 2024 },
    { month: 'August', year: 2024 },
    { month: 'September', year: 2024 },
    { month: 'October', year: 2024 },
    { month: 'November', year: 2024 },
    { month: 'December', year: 2024 }
  ];

  let emissions = null;
  const token = localStorage.getItem('token')
  axios.get('https://ecotracker-t8em.onrender.com/calc/getEmissions', {
    headers: {
      'Authorization': token
    }
  }).then(res => {
    emissions = res.data
  }).catch(err => {
    console.log(Error)
  })
//change from here
  const mergeData = (userData, allMonths) => {
    const defaultValues = {
      electricity: 0,
      gasusage: 0,
      wood: 0,
      priv: 0,
      waste: 0,
      meals: 0,
      totalemission: 0,
      cityAverage: 200, // Example average value
      countryAverage: 250 // Example average value
    };

    const mergedData = allMonths.map(monthObj => {
      const userMonthData = userData.find(
        data => data.month === monthObj.month && data.year === monthObj.year
      );
      return {
        ...monthObj,
        ...defaultValues,
        ...userMonthData
      };
    });

    return mergedData;
  };

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      const mergedData = mergeData(result, allMonths);
      setData(mergedData);
      calculateTopEmissions(mergedData);
    };

    getData();
  }, []);

  const calculateTopEmissions = (data) => {
    const emissions = data.reduce((acc, month) => {
      acc.electricity = (acc.electricity || 0) + month.electricity;
      acc.gas = (acc.gas || 0) + month.gasusage;
      acc.wood = (acc.wood || 0) + month.wood;
      acc.priv = (acc.priv || 0) + month.priv;
      acc.waste = (acc.waste || 0) + month.waste;
      acc.meals = (acc.meals || 0) + month.meals;
      return acc;
    }, {});

    const sortedEmissions = Object.entries(emissions)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([type, amount]) => ({ type, amount }));

    setTopEmissions(sortedEmissions);
    generateRecommendations(sortedEmissions);
  };

  const generateRecommendations = (topEmissions) => {
    const recommendations = topEmissions.map(emission => {
      switch (emission.type) {
        case 'electricity':
          return 'Consider using energy-efficient appliances and switching to renewable energy sources.';
        case 'gas':
          return 'Optimize gas usage by maintaining your appliances and considering alternative heating methods.';
        case 'wood':
          return 'Reduce wood consumption by using efficient stoves and sourcing sustainable wood.';
        case 'priv':
          return 'Reduce private vehicle usage by carpooling, using public transport, or switching to electric vehicles.';
        case 'waste':
          return 'Reduce waste production by recycling, composting, and minimizing single-use products.';
        case 'meals':
          return 'Adopt a more plant-based diet to lower your carbon footprint from food.';
        default:
          return '';
      }
    });
    setRecommendations(recommendations);
  };

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <h2>Last 12 Months Emission</h2>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalemission" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="chart-container">
        <h2>Top 5 Emissions</h2>
        <ul className="top-emissions-list">
          {topEmissions.map((emission, index) => (
            <li key={index} className="top-emission-item">
              {emission.type}: {emission.amount}
            </li>
          ))}
        </ul>
      </div>

      <div className="chart-container">
        <h2>Emission Comparison</h2>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalemission" stroke="#8884d8" />
          <Line type="monotone" dataKey="cityAverage" stroke="#82ca9d" />
          <Line type="monotone" dataKey="countryAverage" stroke="#ffc658" />
        </LineChart>
      </div>

      <div className="recommendations-container">
        <h2>Recommendations</h2>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
