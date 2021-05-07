import React from 'react';
import Tooltip from './Tooltip';
import {BsQuestionSquare} from 'react-icons/bs';
import {details} from './detailsInfo';

export default function SearchFilters({ filterHazardState, filterDateState, setFilterHazardState, setFilterSizeState, setFilterDateState }) {

    const handleHazardSelectChange = e => {
        setFilterHazardState(e.target.value);
    };
   
    const handleDateSelectChange = e => {
        setFilterDateState(e.target.value);
    };

    return (
        <div className="searchFilters-container">
      
            <form className="asteroids-filter" id="astHazardFilter">
                <Tooltip text={details.hazardous} placement="right">
                    <label>Filter by <span id="filter-hazard-span">hazard</span> <BsQuestionSquare/> :</label>
                </Tooltip>
                    <select value={filterHazardState} name="hazardFilter" id="hazardFilter" onChange={handleHazardSelectChange}>
                        <option  value="all">ALL</option>
                        <option value="hazardous">HAZARDOUS</option>
                        <option value="nonhazardous">NONHAZARDOUS</option>
                    </select>
                </form>
        
            <form className="asteroids-filter" id="astDateFilter">
                    <label>Next 20 years:</label>
                    <select value={filterDateState} name="dateFilter" id="dateFilter" onChange={handleDateSelectChange}>
                        <option  value="off">OFF</option>
                        <option value="on">ON</option>
                    </select>
            </form>
               
        </div>
    )
}
