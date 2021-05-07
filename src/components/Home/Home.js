import HomepageTitle from './HomepageTitle';
import Stars from '../Common/Stars';
import Moto from './Moto';
import Count from './Count';
import BrowseBtn from './BrowseBtn';

const Home = () => {

    document.title = "ASTEROID_APP"

    return ( 
        <div className="home-container">
            <HomepageTitle />
            <Stars />
            <Moto />
            <Count />
            <BrowseBtn />
        </div>
     );


}
 
export default Home;