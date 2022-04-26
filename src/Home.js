import React from 'react';
import { CardInfo, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import Log from "./Log";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


class Home extends React.Component {
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
                <CardInfo data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default Home;