import Stars from '../Common/Stars';
import BrowseBtn from '../Home/BrowseBtn';

const PageNotFound = () => {
    return ( 
        <div className="pageNotFound">
            <div className="pageNotFound-message">
                <h2>OOPS, PAGE IS NOT FOUND</h2>
            </div>
            <Stars />
            <BrowseBtn />
        </div>
     );
}
 
export default PageNotFound;