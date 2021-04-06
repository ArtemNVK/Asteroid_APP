
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function AsteroidCard({asteroid, filterState}) {

    let relevantDatesArrays = asteroid.close_approach_data.filter((item) => Date.parse(item.close_approach_date) > Date.now());
    
    return (

        <div className="astc-container">
            {filterState === 'all' &&

            <div>

            <div className="astc-header">
                <h2>{asteroid.name}</h2>
                {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                <div className="astc-header-observed">
                    <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                    <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                </div>

                <div className="diameter">
                    <h4>Estimated diameter:</h4>
                    <div className="astc-header-maxmin-diameter">
                        <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                        <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                    </div>
                </div>
            </div>

            <div className="astc-content">
                <h4>Close Approach Dates:</h4>
                <ul> 

                    {/* DISPLAY ALL DATES */}

                   {/* {asteroid.close_approach_data.map(item => {
                        // return <li key={uuidv4()}>{item.close_approach_date}</li>
                        return <li key={uuidv4()}></li>

                    })} 
                     */}

                     {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                    {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                    
                </ul>
            </div>

            <div className="astc-button">
                <Link to="/details">
                    <button>Learn More...</button>
                </Link>
            </div>

            </div>
            }

            {filterState === 'hazardous' && asteroid.is_potentially_hazardous_asteroid?
               
            <div>

            <div className="astc-header">
                <h2>{asteroid.name}</h2>
                {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                <div className="astc-header-observed">
                    <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                    <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                </div>

                <div className="diameter">
                    <h4>Estimated diameter:</h4>
                    <div className="astc-header-maxmin-diameter">
                        <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                        <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                    </div>
                </div>
            </div>

            <div className="astc-content">
                <h4>Close Approach Dates:</h4>
                <ul> 

                    {/* DISPLAY ALL DATES */}

                   {/* {asteroid.close_approach_data.map(item => {
                        // return <li key={uuidv4()}>{item.close_approach_date}</li>
                        return <li key={uuidv4()}></li>

                    })} 
                     */}

                     {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                    {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                    
                </ul>
            </div>

            <div className="astc-button">
                <Link to="/details">
                    <button>Learn More...</button>
                </Link>
            </div>

            </div>
                : <div></div>
            }

            {filterState === 'nonhazardous' && !asteroid.is_potentially_hazardous_asteroid?
               
            <div>

            <div className="astc-header">
                <h2>{asteroid.name}</h2>
                {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                <div className="astc-header-observed">
                    <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                    <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                </div>

                <div className="diameter">
                    <h4>Estimated diameter:</h4>
                    <div className="astc-header-maxmin-diameter">
                        <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                        <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                    </div>
                </div>
            </div>

            <div className="astc-content">
                <h4>Close Approach Dates:</h4>
                <ul> 

                    {/* DISPLAY ALL DATES */}

                   {/* {asteroid.close_approach_data.map(item => {
                        // return <li key={uuidv4()}>{item.close_approach_date}</li>
                        return <li key={uuidv4()}></li>

                    })} 
                     */}

                     {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                    {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                    
                </ul>
            </div>

            <div className="astc-button">
                <Link to="/details">
                    <button>Learn More...</button>
                </Link>
            </div>

            </div>
                : <div></div>
            }

            
                
        </div>
                   
                    


    )
}

export default AsteroidCard
