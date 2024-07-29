import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, Legend } from 'recharts';
import axios from 'axios';
import './style/indexdashboard.css';
import Navbar from "./Navbar";

const Dashboard = () => {
  const userEmail = localStorage.getItem('userEmail');
  const [totalEmissions, setTotalEmissions] = useState([]);
  useEffect(() => {
    if (!userEmail) {
      // Redirect to login if email is not found in local storage
      alert("You need to login first to perform this action");
      window.location.href = "/login";
    }
  }, [userEmail]);
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const [topEmissions, setTopEmissions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [user, setUser] = useState(null);
  const [allem, setAllem] = useState(null);

  let emissions = null;
  if (!token) {
    console.log("no token");
  }
  emissions = axios.get('https://ecotracker-t8em.onrender.com/calc/getEmissions', {
    headers: {
      'Authorization': token
    }
  }).then(res => {
    emissions = res.data;
    console.log(res.data);
    console.log(res.data.length)
    setAllem(res.data);
    const emissions = emissions.map(item => item.totalemission);
    setTotalEmissions(emissions);
  }).catch(err => {
    console.log(Error);
  });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userres = await axios.get('https://ecotracker-t8em.onrender.com/auth/getUser', {
          headers: {
            'Authorization': token
          }
        });
        setUser(userres.data);
        console.log(userres);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };

    fetchUser();
  }, [token]);

  const mergeData = (userData, allMonths) => {
    const defaultValues = {
      electricity: 0,
      gasusage: 0,
      wood: 0,
      priv: 0,
      waste: 0,
      meals: 0,
      totalemission: 0,
      cityAverage: user.cityAvg, // Example average value
      countryAverage: 250 // Example average value
    };

  };
 return (
    <div>
      
    </div>
  );
};

export default Dashboard;
