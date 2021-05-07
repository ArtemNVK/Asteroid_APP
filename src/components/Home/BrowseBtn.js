import { Link } from 'react-router-dom';

const BrowseBtn = () => {

  

    return ( 
        <div className="browseBtn-container">
          <Link to="/asteroids">
            <div className="browseBtn">
              <span className="browseBtn-span"></span>
              <span className="browseBtn-span"></span>
              <span className="browseBtn-span"></span>
              <span className="browseBtn-span"></span>
              Browse all
            </div>
          </Link>  
        </div>
     );
}
 
export default BrowseBtn;