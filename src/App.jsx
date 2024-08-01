import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Privacy from './components/privacypolicy'; //privacy policy
import About from "./components/About" //about section
import Calculator from "./components/Calculator" //calculator
import Contact from "./components/Contact" //contact us
import Experience from './components/Experience' //faq
import Home from './components/Home' //home page
import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Userinfo from './components/userinfo';
import Login from './components/Login';
import Logout from './components/logout';
import Quiz from './components/Quiz';
import Dashboard from './components/Dashboard';
import Works from './components/Works';
import Forgetpswd from './components/forgetpswd';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Signup />} />
         <Route path="/userinfo" element={<Userinfo />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/calculator" element={<Calculator />} />
         <Route path="/homepage" element={<Home />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/faq" element={<Experience />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/reward" element={<Works />} />
         <Route path="/recover" element={<Forgetpswd />} />
      </Routes>
   );
};

export default App;

