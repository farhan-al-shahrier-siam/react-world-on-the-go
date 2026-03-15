import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const handleVisitedCountries = (country) => {
        // console.log("Handle visited country clicked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };
    const handlevisitedFlag = (flag) => {
        // console.log("flags need to be added", flag);
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags);
    };

    return (
        <div>
            <h1>Inside the countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.cca3.cca3}>{country.name.common}</li>
                ))}
            </ol>

            <h3>Visited flags: {visitedFlag.length}</h3>
            <div className="visited-class-container">
                {visitedFlag.map((flag, index) => (
                    <img key={index} src={flag}></img>
                ))}
            </div>

            <div className="countries">
                {countries.map((country) => (
                    <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handlevisitedFlag={handlevisitedFlag}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
