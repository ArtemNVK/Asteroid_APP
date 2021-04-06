import { useState } from 'react';
import AsteroidCard from './AsteroidCard';

function Asteroids({ asteroids }) {

    const [filterState, setFilterState] = useState('all');
    
    const handleSelectChange = e => {
        setFilterState(e.target.value);
    };

    return (
        <div className="asteroids-container">

                <form className="asteroid-filter">
                    <label>Filter:</label>
                    <select value={filterState} name="hazardFilter" id="hazardFilter" onChange={handleSelectChange}>
                        <option  value="all">All</option>
                        <option value="hazardous">Hazardous</option>
                        <option value="nonhazardous">Nonhazardous</option>
                    </select>
                </form>



                {asteroids.map(asteroid => (
                    <div key={asteroid.id}>
                        <AsteroidCard asteroid={asteroid} filterState={filterState} />
                    </div>
                ))}
        
        </div>
    )
}

export default Asteroids
