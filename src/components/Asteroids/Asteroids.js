import { useState, useRef, useCallback } from 'react';
import AsteroidCard from './AsteroidCard';
import { v4 as uuidv4 } from 'uuid';
import useAsteroidsSearch from '../../customHooks/useAsteroidsSearch';
import ScrollToTop from '../Common/ScrollToTop';
import Header from '../Header/Header';
import Loader from '../Common/Loader';
import LoadMoreBtn from './LoadMoreBtn';
import Error from '../Common/Error';

function Asteroids() {

    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(20)
    const [filterHazardState, setFilterHazardState] = useState('all');
    const [filterDateState, setFilterDateState] = useState('off');

    document.title = "Asteroids Browser"
    
    const {
        asteroids,
        hasMore,
        loading,
        error
      } = useAsteroidsSearch(pageNumber, pageSize)

    const observer = useRef()
    const lastAsteroidElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            // setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const handleClick = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    console.log(asteroids)

    

    return (
        
        <div className="asteroids">
            <div className="asteroids-container">

                    <Header filterHazardState={filterHazardState} filterDateState={filterDateState} setFilterHazardState={setFilterHazardState} setFilterDateState={setFilterDateState} />
                    <ScrollToTop />
                    
                    {asteroids.map((asteroid, index) => {
                        if (asteroids.length === index + 1) {
                            return   (
                     
                            <div ref={lastAsteroidElementRef} key={uuidv4()}>
                                <AsteroidCard asteroid={asteroid} filterHazardState={filterHazardState} filterDateState={filterDateState} loading={loading}/>
                            </div>
                           
                            )
                        } else {
                            return (    
                            <div key={uuidv4()}>
                                <AsteroidCard asteroid={asteroid} filterHazardState={filterHazardState} filterDateState={filterDateState} loading={loading}/>
                            </div>
                            )
                        }
                    })}
                    
            </div>
           {loading && <Loader/>}  
           {error && <Error />}
           {!loading && !error ?
           <LoadMoreBtn handleClick={handleClick} /> : <div></div>
            }
        </div>
        
    )
}

export default Asteroids
