import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.scss';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import NewListing from './pages/newListing/NewListing';
import ShowListing from './pages/showListing/showListing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/newListing"} element={<NewListing/>}/>
            <Route path={"/listing/:id"} element={<ShowListing />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
