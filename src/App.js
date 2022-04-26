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


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (

      <div className={styles.container}>
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


        <CardInfo data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;