import { getNodeText } from "@testing-library/dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function AsteroidCard({asteroid, filterHazardState, filterDateState, loading}) {
    

    let relevantDatesArrays = asteroid.close_approach_data.filter((asteroid) => Date.parse(asteroid.close_approach_date) > Date.now());
    let twentyYearsFromNow = Date.now() + 631139040000;
    
    const e = document.querySelector('astc-container');




    return (
        // <div className="astc-container">
      <>

                        {/*/////////////////////////////////////////// If hazard FILTER = ALL, display the nearest years if OFF ////////////////////////////////////*/}

                        {filterHazardState === 'all' &&  filterDateState === 'off' ?

            <div className="card">
            <div className="astc-header">
                <h2>{asteroid.name}</h2>
                {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
            </div>
                <div className="astc-header-observed">
                    <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                    <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                </div>

            <div className="astc-content">
                <div className="diameter">
                    <h4>Estimated diameter:</h4>
                    <div className="astc-header-maxmin-diameter">
                        <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                        <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                    </div>
                </div>
            

            {/* <div className="astc-content"> */}
            <div className="astc-closeApproachesList">
                <h4>Close Approach Dates:</h4>
                <ul> 
                    {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                    {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                </ul>
            </div>
            </div>

            <div className="astc-learnMore-button-container">
                <Link to={`/details/${asteroid.id}`} target="_blank">
                    <button className="astc-learnMore-button">LEARN MORE</button>
                </Link>
            </div>
            </div>
                : <div></div>
            }
          
            {/*//////////////////////////////////////////// If hazard filter = all, display the nearest years is ON //////////////////////////////////////////////////////////////////////*/}

            
            {filterHazardState === 'all' &&  filterDateState === 'on' ?

            <div className="card">

            <div className="astc-header">
                <h2>{asteroid.name}</h2>
                {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
            </div>
                <div className="astc-header-observed">
                    <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                    <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                </div>

                <div className="astc-content">
                <div className="diameter">
                    <h4>Estimated diameter:</h4>
                    <div className="astc-header-maxmin-diameter">
                        <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                        <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                    </div>
                </div>
            

            
                <h4>Close Approach Dates:</h4>
                <ul className="astc-closeApproachesList"> 

                     {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                    {/* {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}       */}
                    {
                    relevantDatesArrays.some(item => Date.parse(item.close_approach_date) < twentyYearsFromNow) ?

                    relevantDatesArrays.slice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )
                    : <p>No approaches in the following 20 years expected.</p>
                    }      
                    
                </ul>

            </div>

           
            
             <div className="astc-learnMore-button-container">
                <Link to={`/details/${asteroid.id}`} target="_blank">
                    <button className="astc-learnMore-button">LEARN MORE</button>
                </Link>
            </div>

            </div>
                : <div></div>
            }



            
                {/* /////////////////////////////////////////////////// If hazard FILTER = HAZARDOUS //////////////////////////////////// */}

                {(filterHazardState === 'hazardous' && filterDateState === 'off' && asteroid.is_potentially_hazardous_asteroid) &&
                
                <div className="card">

                <div className="astc-header">
                    <h2>{asteroid.name}</h2>
                    {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                </div>   
                    <div className="astc-header-observed">
                        <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                        <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                    </div>

                    <div className="astc-content">
                    <div className="diameter">
                        <h4>Estimated diameter:</h4>
                        <div className="astc-header-maxmin-diameter">
                            <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                            <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                        </div>
                    </div>
                

                
                    <h4>Close Approach Dates:</h4>
                    <ul className="astc-closeApproachesList"> 

                        {/* DISPLAY DATES FROM TODAY && NO MORE THAN 5  */}

                        {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                        
                    </ul>
                </div>

                <div className="astc-learnMore-button-container">
                    <Link to={`/details/${asteroid.id}`} target="_blank">
                        <button className="astc-learnMore-button">LEARN MORE</button>
                    </Link>
                </div>

                </div>
                    
                }
                {/* /////////////////////////////////////////////////// If hazard FILTER = HAZARDOUS, display the nearest years is ON //////////////////////////////////// */}

                {filterHazardState === 'hazardous' && filterDateState === 'on' 
                    && asteroid.is_potentially_hazardous_asteroid ?
                    
                
                <div className="card">

                <div className="astc-header">
                    <h2>{asteroid.name}</h2>
                    {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                </div> 
                    <div className="astc-header-observed">
                        <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                        <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                    </div>
                    <div className="astc-content">
                    <div className="diameter">
                        <h4>Estimated diameter:</h4>
                        <div className="astc-header-maxmin-diameter">
                            <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                            <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                        </div>
                    </div>

                    <h4>Close Approach Dates:</h4>
                    <ul className="astc-closeApproachesList"> 

                        {relevantDatesArrays.some(item => Date.parse(item.close_approach_date) < twentyYearsFromNow) ?
                        relevantDatesArrays.slice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )
                        : <p>No approaches in the following 20 years expected.</p>}      
                        
                    </ul>
                </div>

                <div className="astc-learnMore-button-container">
                    <Link to={`/details/${asteroid.id}`} target="_blank">
                        <button className="astc-learnMore-button">LEARN MORE</button>
                    </Link>
                </div>

                </div>
                  : <div></div>
                }

                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ If hazard FILTER = NONHAZARDOUS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                {filterHazardState === 'nonhazardous' && filterDateState === 'off' && !asteroid.is_potentially_hazardous_asteroid ?
                
                <div className="card">

                <div className="astc-header">
                    <h2>{asteroid.name}</h2>
                    {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                </div>  
                    <div className="astc-header-observed">
                        <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                        <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                    </div>

                    <div className="astc-content">
                    <div className="diameter">
                        <h4>Estimated diameter:</h4>
                        <div className="astc-header-maxmin-diameter">
                            <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                            <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                        </div>
                    </div>

                    <h4>Close Approach Dates:</h4>
                    <ul className="astc-closeApproachesList"> 

                        {relevantDatesArrays.splice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )}      
                        
                    </ul>
                </div>

                <div className="astc-learnMore-button-container">
                    <Link to={`/details/${asteroid.id}`} target="_blank">
                        <button className="astc-learnMore-button">LEARN MORE</button>
                    </Link>
                </div>

                </div>
                    : <div></div>
                }

            {/* /////////////////////////////////////////////////// If hazard FILTER = NONHAZARDOUS, display the nearest years is ON //////////////////////////////////// */}
           
            {filterHazardState === 'nonhazardous' && filterDateState === 'on' 
                    && !asteroid.is_potentially_hazardous_asteroid 
                    ?
                
                <div className="card">
    
                <div className="astc-header">
                    <h2>{asteroid.name}</h2>
                    {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
                </div>
                    <div className="astc-header-observed">
                        <div className="astc-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                        <div className="astc-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
                    </div>
    
                    <div className="astc-content">
                    <div className="diameter">
                        <h4>Estimated diameter:</h4>
                        <div className="astc-header-maxmin-diameter">
                            <p>Min: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_min + Number.EPSILON) * 100) / 100} km</p>
                            <p>Max: {Math.round((asteroid.estimated_diameter.kilometers.estimated_diameter_max + Number.EPSILON) * 100) / 100} km</p>
                        </div>
                    </div>
    
                    <h4>Close Approach Dates:</h4>
                    <ul className="astc-closeApproachesList"> 
    
                        {relevantDatesArrays.some(item => Date.parse(item.close_approach_date) < twentyYearsFromNow) ?
                            relevantDatesArrays.slice(0, 5).map(item => <li key={uuidv4()}>{item.close_approach_date}</li> )
                            : <p>No approaches in the following 20 years expected.</p>}      
                        
                    </ul>
                </div>
    
                <div className="astc-learnMore-button-container">
                    <Link to={`/details/${asteroid.id}`} target="_blank">
                        <button className="astc-learnMore-button">LEARN MORE</button>
                    </Link>
                </div>
    
                </div>
                    : <div></div>
                }

                   </>              
        // </div>

                   
                 
    )
}

export default AsteroidCard
