import { Link, useParams  } from 'react-router-dom';
import useAsteroidIdSearch from '../../customHooks/useAsteroidIdSearch';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Common/Loader';
import Tooltip from '../Common/Tooltip';
import {BsQuestionSquare} from 'react-icons/bs';
import {BsQuestionSquareFill} from 'react-icons/bs';
import {details} from '../Common/detailsInfo';
import AstDetailsBtn from './AstDetailsBtn';
import Error from '../Common/Error';

function AstDetails() {

    const params = useParams();
    const id = params.id;
    
    const {
        asteroid, 
        loading,
        error
    } = useAsteroidIdSearch(id)

    
    if(asteroid) document.title = asteroid.name

    return (
    <div className="ast-details">
      
      {asteroid !== null &&
      <div className="ast-details-info">
          <div className="astDetails-headerTitle-container">
            <h1 id="astDetails-name">{asteroid.name}</h1>
          </div>
          <div className="ast-details-header">
              {/* <h2>{asteroid.name}</h2> */}
              {asteroid.is_potentially_hazardous_asteroid ? <h3 className="red">HAZARDOUS</h3> : <h3 className="green">NONHAZARDOUS</h3>}
              <div className="astDetails-header-observed">
                <div className="astDetails-header-observed-first"><p>Fisrt observed: <br/>{asteroid.orbital_data.first_observation_date}</p></div>
                <div className="astDetails-header-observed-last"><p>Last observed: <br/>{asteroid.orbital_data.last_observation_date}</p></div>
              </div>
              <Tooltip text={details.sentry} placement="right">
              <div className="astDetails-sentry">
                {!asteroid.is_sentry_object ? <p>{asteroid.name} is not on sentry list <BsQuestionSquare/>   </p> : <p>{asteroid.name} is on sentry list <BsQuestionSquare/>   </p>}  
                
              </div>
              
              </Tooltip>
          </div>   

                
              
              <div className="accordion">

                <div className="accordion-item">
                  <div className="accordion-item-header" onClick={(e) => {
                  
                      e.target.classList.toggle("active");
                      const accordionItemBody = e.target.nextElementSibling;
                      if(e.target.classList.contains("active")) {
                        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                      }
                      else {
                        accordionItemBody.style.maxHeight = 0;
                      }
                    } 

                  }>
                   
                    Estimated diameter
                
                  </div>
                  <div className="accordion-item-body">
                    <div className="accordion-item-body-content">
                
                <h5>Kilometers:</h5>
               
                <div className="astDetails-diameter" id="diameter-km">
                  <p>Min: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} km</p>
                  <p>Max: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} km</p>
                </div>
                <h5>Meters:</h5>
                <div className="astDetails-diameter" id="diameter-m">
                  <p>Min: {asteroid.estimated_diameter.meters.estimated_diameter_min} m</p>
                  <p>Max: {asteroid.estimated_diameter.meters.estimated_diameter_min} m</p>
                </div>
                <h5>Miles:</h5>
                <div className="astDetails-diameter" id="diameter-mi">
                  <p>Min: {asteroid.estimated_diameter.miles.estimated_diameter_min} mi</p>
                  <p>Max: {asteroid.estimated_diameter.miles.estimated_diameter_min} mi</p>
                </div>
                <h5>Feet:</h5>
                <div className="astDetails-diameter" id="diameter-ft">
                  <p>Min: {asteroid.estimated_diameter.feet.estimated_diameter_min} ft</p>
                  <p>Max: {asteroid.estimated_diameter.feet.estimated_diameter_min} ft</p>
                </div>
              

              </div>
            </div>
          </div>         



          
          
          <div className="accordion-item">
                  <div className="accordion-item-header" onClick={(e) => {
                  
                  e.target.classList.toggle("active");
                  const accordionItemBody = e.target.nextElementSibling;
                  if(e.target.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  }
                  else {
                    accordionItemBody.style.maxHeight = 0;
                  }
                } 

              }>
                    Approach Dates
                  </div>
                  <div className="accordion-item-body">
                    <div className="accordion-item-body-content">
          
                {asteroid.close_approach_data.map(item => {
                 return (
                <>  

                
                <div className="accordion">
                  <div className="accordion-item">
                  <div className="accordion-item-header" onClick={(e) => {
                  
                  e.target.classList.toggle("active");
                  const accordionItemBody = e.target.nextElementSibling;
                  if(e.target.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  }
                  else {
                    accordionItemBody.style.maxHeight = 0;
                  }
                } 

              }>
                  {item.close_approach_date}
                  </div>

                    <div className="accordion-item-body" id={uuidv4()}>
                      <div className="accordion-item-body-content">

                      <p>Full date: {item.close_approach_date_full}</p>
                      <Tooltip text={details.orbBody} placement="right">
                      <div className="tooltipTrigger">
                      <p>Orbiting body: {item.orbiting_body} <BsQuestionSquareFill /></p>
                      </div>
                      </Tooltip>
                      
                      <div className="accordion-item">
                        <div className="accordion-item-header" onClick={(e) => {
                  
                  e.target.classList.toggle("active");
                  const accordionItemBody = e.target.nextElementSibling;
                  if(e.target.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  }
                  else {
                    accordionItemBody.style.maxHeight = 0;
                  }
                } 

              }>
                          Relative velocity
                        </div>
                      <div className="accordion-item-body" id={uuidv4()}>
                        <div className="accordion-item-body-content">
                        <p>{item.relative_velocity.kilometers_per_second} km/s</p>
                        <p>{item.relative_velocity.kilometers_per_hour} km/h</p>
                        <p>{item.relative_velocity.miles_per_hour} mph</p>
                        </div>
                      </div>


                      </div>
                      
                      <div className="accordion-item">
                      
                        <div className="accordion-item-header" onClick={(e) => {
                  
                                e.target.classList.toggle("active");
                                const accordionItemBody = e.target.nextElementSibling;
                                if(accordionItemBody){
                                if(e.target.classList.contains("active")) {
                                  accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                                }
                                else {
                                  accordionItemBody.style.maxHeight = 0;
                                }
                              } 
                            }
                           
                        }>
                          <p>Miss Distance</p>
                        </div>
                     
                      
                      <div className="accordion-item-body" id={uuidv4()}>
                        <div className="accordion-item-body-content">
                        <p>Astronomical: {item.miss_distance.astronomical}</p>
                        <p>Lunar: {item.miss_distance.lunar}</p>
                        <p>Kilometers: {item.miss_distance.kilometers}</p>
                        <p>Miles: {item.miss_distance.miles}</p>
                        </div>
                     </div>

                      </div>
                    </div>

                    </div>
                  </div>
                </div>
                </>  
                 )
                })} 


            </div>
           </div>
          </div>

          
          <div className="accordion-item">
                  <div className="accordion-item-header" onClick={(e) => {
                  
                  e.target.classList.toggle("active");
                  const accordionItemBody = e.target.nextElementSibling;
                  if(e.target.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  }
                  else {
                    accordionItemBody.style.maxHeight = 0;
                  }
                } 

              }>
                    Orbital data
                  </div>
                  <div className="accordion-item-body">
                    <div className="accordion-item-body-content">
                      
             <p>Orbit ID: {asteroid.orbital_data.orbit_id}</p>
             <Tooltip text={details.orbDetDate} placement="right">
             <div className="tooltipTrigger">
             <p>Orbit determination date <BsQuestionSquareFill /> : {asteroid.orbital_data.orbit_determination_date} </p>
             </div>
             </Tooltip>
             <p>First observation date: {asteroid.orbital_data.first_observation_date}</p>	
             <p>Last observation date: {asteroid.orbital_data.last_observation_date}</p>
             <Tooltip text={details.arc} placement="right">
             <div className="tooltipTrigger">
             <p>Data arc in days <BsQuestionSquareFill /> : {asteroid.orbital_data.data_arc_in_days	}</p>
             </div>  
             </Tooltip>
             <p>Observations used: {asteroid.orbital_data.observations_used}</p>	
             <Tooltip text={details.orbUncert} placement="right">
             <div className="tooltipTrigger">
             <p>Orbit uncertainty  <BsQuestionSquareFill /> : {asteroid.orbital_data.orbit_uncertainty	}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.minOrbIntersect} placement="right">
             <div className="tooltipTrigger">
             <p>Minimum orbit intersection <BsQuestionSquareFill /> : {asteroid.orbital_data.minimum_orbit_intersection}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.tisserand} placement="right">
             <div className="tooltipTrigger">
             <p>Jupiter tisserand invariant <BsQuestionSquareFill /> : {asteroid.orbital_data.jupiter_tisserand_invariant	}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.epochOscul} placement="right">
             <div className="tooltipTrigger">
             <p>Epoch osculation <BsQuestionSquareFill /> : {asteroid.orbital_data.epoch_osculation}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.eccintricity} placement="right">
             <div className="tooltipTrigger">
             <p>Eccentricity <BsQuestionSquareFill /> : {asteroid.orbital_data.eccentricity}</p>	
             </div>
             </Tooltip>
             <Tooltip text={details.semiMajorAxis} placement="right">
             <div className="tooltipTrigger">
             <p>Semi major axis <BsQuestionSquareFill /> : {asteroid.orbital_data.semi_major_axis}</p>
             </div>	
             </Tooltip>
             <Tooltip text={details.inclination} placement="right">
             <div className="tooltipTrigger">
             <p>Inclination <BsQuestionSquareFill /> : {asteroid.orbital_data.inclination}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.ascNodeLgtd} placement="right">
             <div className="tooltipTrigger">
             <p>Ascending node longitude <BsQuestionSquareFill /> : {asteroid.orbital_data.ascending_node_longitude}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.orbPeriod} placement="right">
             <div className="tooltipTrigger">
             <p>Orbital period <BsQuestionSquareFill /> : {asteroid.orbital_data.orbital_period}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.perihelionDist} placement="right">
             <div className="tooltipTrigger">
             <p>Perihelion distance <BsQuestionSquareFill /> : {asteroid.orbital_data.perihelion_distance}</p>	
             </div>
             </Tooltip>
             <Tooltip text={details.perihelionArg} placement="right">
             <div className="tooltipTrigger">
             <p>Perihelion argument <BsQuestionSquareFill /> : {asteroid.orbital_data.perihelion_argument}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.aphelionDist} placement="right">
             <div className="tooltipTrigger">
             <p>Aphelion distance <BsQuestionSquareFill /> : {asteroid.orbital_data.aphelion_distance}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.perihilionTime} placement="right">
             <div className="tooltipTrigger">
             <p>Perihilion time <BsQuestionSquareFill /> : {asteroid.orbital_data.perihelion_time}</p>
             </div>	
             </Tooltip>
             <Tooltip text={details.meanAnomaly} placement="right">
             <div className="tooltipTrigger">
             <p>Mean anomaly <BsQuestionSquareFill /> : {asteroid.orbital_data.mean_anomaly}</p>
             </div>
             </Tooltip>
             <Tooltip text={details.meanMotion} placement="right">
             <div className="tooltipTrigger">
             <p>Mean motion <BsQuestionSquareFill /> : {asteroid.orbital_data.mean_motion}</p>
             </div>
             </Tooltip>	
             <Tooltip text={details.equinox} placement="right">
             <div className="tooltipTrigger">
             <p>Equinox <BsQuestionSquareFill /> : {asteroid.orbital_data.equinox}</p>
             </div>
             </Tooltip>

             
             <div className="accordion">
              <div className="accordion-item">  
                <div className="accordion-item-header" onClick={(e) => {
                  
                  e.target.classList.toggle("active");
                  const accordionItemBody = e.target.nextElementSibling;
                  if(e.target.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                  }
                  else {
                    accordionItemBody.style.maxHeight = 0;
                  }
                } 

              }>
                  Orbit class
                </div>
                
             <div className="accordion-item-body">
              <div className="accordion-item-body-content">
              <Tooltip text={details.orbClassType} placement="right">
              <div className="tooltipTrigger">
               <p>Orbit class type <BsQuestionSquareFill /> : {asteroid.orbital_data.orbit_class.orbit_class_type}</p>
              </div>
              </Tooltip>
               <p>Orbit class description: {asteroid.orbital_data.orbit_class.orbit_class_description}</p>
              
               <p>Orbit class range : {asteroid.orbital_data.orbit_class.orbit_class_range}</p>
               
              </div>
             </div>

              </div>
             </div>

                </div>
              </div>
            </div>




          </div>






    
      </div>       
      }  
      {loading && <Loader/>}
      {error && <Error />}
      {!loading && <AstDetailsBtn />}
        


    </div>           
    )
}

export default AstDetails
