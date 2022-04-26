import React from 'react';
import "./App.css";
import Home from './Home';
import Log from "./Log";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
  );
}


export default App;