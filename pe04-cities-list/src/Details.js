import React from 'react';

// Component for displaying city details
function Details({city, country, population}) {
    
    return (
        <div>
            <h3> {city} Details</h3> 
            <div> Country: {country} </div>
            <div> Population: {population} </div>
        </div>
    );
}

export default Details;