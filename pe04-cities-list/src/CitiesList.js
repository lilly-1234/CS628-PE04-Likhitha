import { Link,useParams } from "react-router-dom";
import Details from "./Details";
import "./citiesApp.css";

// Component for cities list with cities as a prop
function CitiesList({cities}) {
    //by using the useParams hook we can get the URL parameters
    const { cityName, country, population } = useParams();
    return (
        <div className="display-tab">
            <h2>Cities List</h2>
            {/* Iterating the cities array */}
            {cities.map((city, index) => (    
                <div key={index}>
                    {/* link for each city that navigates to a URL with city details */}
                    <Link to={`/citiesList/${city.name}/${city.country}/${city.population}`}>{city.name}</Link>
                </div>
            ))}

            {/* if city name is present in the URL then it displays city details of that city*/}
            {cityName &&
                <Details city={cityName} country={country} population={population}> </Details>
            }
        </div>
    )
}

export default CitiesList;