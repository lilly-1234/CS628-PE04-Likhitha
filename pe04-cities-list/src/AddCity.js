import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './citiesApp.css';

function AddCity({addToList}) {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [population, setPopulation] = useState("");
    
    const navigate = useNavigate();
    const addCityToList = () => {
        
        // Checking all fields are filled or not
        if(name && country && population) { 
            // if filled, it calls parent components addcity function
            addToList(name, country, population)
            navigate("/citiesList");  // After adding a city navigate to cities list
        
        } else {
            // if not, it displays alert message
            alert("Please enter all the details");
        }
    }
    return (
        <div className="display-tab">
            <h2 > 
                Add City
            </h2>
            <div>
                <div>
                    <label>Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                        placeholder="Enter City Name"
                    />
                </div>
                
                <div>
                    <label>Country: </label>
                    <input
                        id="country"
                        type="text"
                        value={country}
                        onChange={(event) => {setCountry(event.target.value)}}
                        placeholder="Enter Country Name"
                    />
                </div>
                
                <div>
                    <label>Population: </label>
                    <input
                        id="population"
                        type="text"
                        value={population}
                        onChange={(event) => {setPopulation(event.target.value)}}
                        placeholder="Enter Population of the City"
                    />
                </div>
                
                <div>
                    <button className="add-city" onClick={addCityToList}>Add City</button>
                </div>
            </div>
        </div>
    )
}

export default AddCity;