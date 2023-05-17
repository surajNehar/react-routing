import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AboutUs from './components/pages/aboutus';
import Courses from './components/pages/courses';
import Login from './components/pages/login';
import Placements from './components/pages/placements';
import Register from './components/pages/register';


import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path : '/AboutUs' ,
    element : <AboutUs/>
  },
  {
    path : '/Register' ,
    element : <Register/>
  },
  {
    path : '/Login' ,
    element : <Login/>
  },
  {
    path : '/Courses' ,
    element : <Courses/>
  },
  {
    path : '/Placements' ,
    element : <Placements/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
