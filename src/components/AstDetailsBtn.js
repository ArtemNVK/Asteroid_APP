import { Link } from 'react-router-dom';

const AstDetailsBtn = () => {
    return (
        
        <div className="astDetailsBtn-container">      
        <Link to="/asteroids">   
        <div className="astDetailsBtn">
            <span className="astDetailsBtn-span"></span>
            <span className="astDetailsBtn-span"></span>
            <span className="astDetailsBtn-span"></span>
            <span className="astDetailsBtn-span"></span>
            BROWSE ALL
        </div>
        </Link>
        </div> 
     
     );
}
 
export default AstDetailsBtn;