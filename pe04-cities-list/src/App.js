import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddCity from './AddCity';
import CitiesList from './CitiesList';
import './citiesApp.css';

function App() {
  // State the variable cities by intilizing with an empty array
  const [cities, setCities] = useState([]); 

  // Function to add a city to the array
  const addCity = (name, country, population) => {
    setCities([...cities, { name, country, population }]); // Spread existing cities and append new city to it
  };

  return (
    <BrowserRouter>
      <div className="display-tab">
        <nav className="display">
          <h1 className="display-title">Cities Application</h1>
          <div className="display-links">
            {/* Links to navigate add city and cities list */}
            <Link to="/citiesList">Cities List</Link>
            <Link to="/addCity">Add City</Link>
          </div>
        </nav>
      </div>
      
      <div >
        <Routes>
          {/* Route for Add City, citiesList, city details */}
          <Route path="/addCity" element={<AddCity addToList={addCity} />} /> 
          <Route path='/citiesList' element={<CitiesList cities={cities} />} />
          <Route path="/citiesList/:cityName/:country/:population" element={<CitiesList cities={cities} />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
