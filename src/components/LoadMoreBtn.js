
const LoadMoreBtn = ({handleClick}) => {
    return (
        
        <div className="loadMoreBtn-container">          
        <div className="loadMoreBtn" onClick={handleClick}>
            <span className="loadMoreBtn-span"></span>
            <span className="loadMoreBtn-span"></span>
            <span className="loadMoreBtn-span"></span>
            <span className="loadMoreBtn-span"></span>
            LOAD MORE
        </div>
        </div> 
     
     );
}
 
export default LoadMoreBtn;