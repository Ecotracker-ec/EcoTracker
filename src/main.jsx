import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Quiz from './components/Quiz.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router
} from 'react-router-dom'
import Calculator from './components/Calculator.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Works from './components/Works.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'quiz',
    element: <Quiz/>
  },
  {
    path:'calc',
    element: <Calculator />
  },
  {
    path:'about',
    element: <About/>
  },
  {
    path:'work',
    element: <Experience/>
  },
  {
    path:'login',
    element: <Contact/>
  },
  {
    path:'reward',
    element: <Works/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
