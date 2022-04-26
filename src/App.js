import React from 'react';
import { CardInfo, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import Home from './Home';
import Log from "./Log";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
  );
}


export default App;