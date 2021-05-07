import Stars from './Stars';
import BrowseBtn from './BrowseBtn';

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