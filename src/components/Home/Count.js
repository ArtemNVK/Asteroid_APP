import { useState, useEffect } from 'react';
import useTotalAsteroidsSearch from '../../customHooks/useTotalAsteroidsSearch';
import CountUp from 'react-countup';

const Count = () => {

    const { total } = useTotalAsteroidsSearch();

    return ( 
        <div className="countup-container">
            <div className="counter">
                {total !== undefined &&
                <CountUp duration={5} delay={1} end={total} />
                }
            </div>
			<h3>Asteroids registered by NASA</h3>
        </div>
     );
}
 
export default Count;