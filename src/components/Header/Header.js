import { Link } from 'react-router-dom';
import SearchFilters from './SearchFilters';

function Header({filterHazardState, filterDateState, setFilterHazardState, setFilterDateState}) {
    return (

        <div className="appHeader">
            <div className="headerAppTitle">
                <Link to="/">
                    <h1>ASTEROID_APP</h1>
                </Link>
            </div>
            <SearchFilters filterHazardState={filterHazardState} filterDateState={filterDateState} setFilterHazardState={setFilterHazardState} setFilterDateState={setFilterDateState} />
        </div>
        

    )
}

export default Header
