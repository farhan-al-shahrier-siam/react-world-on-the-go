import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handlevisitedFlag }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // basic toggle system
        /* if (visited) {
            setVisited(false);
        } else {
            setVisited(true);
        } */

        // ternary toggle system
        /* setVisited(visited ? false : true); */

        // third system
        setVisited(!visited);
        handleVisitedCountries(country);
    };

    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>
                Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}
            </p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
            <button className="btn-space" onClick={()=>{handlevisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;
