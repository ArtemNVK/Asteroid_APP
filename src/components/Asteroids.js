import AsteroidCard from './AsteroidCard';

function Asteroids({ asteroids }) {

    const asteroidCards = asteroids.map(asteroid => {
        
            return <div key={asteroid.id}><AsteroidCard asteroid={asteroid} /></div>   
    })

    

    return (
        <div className="container">
                {asteroids.map(asteroid => (
                    <div key={asteroid.id}>
                        <AsteroidCard asteroid={asteroid} />
                    </div>
                ))}
        
        </div>
    )
}

export default Asteroids
