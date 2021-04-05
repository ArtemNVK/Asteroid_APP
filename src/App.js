import { useState, useEffect } from 'react';
import Asteroids from './components/Asteroids';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AstDetails from './components/AstDetails';



function App() {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetches asteroids from NASA API. Default - 20 objects per page
  useEffect(() => {
    const fetchAsteroids = async () => {
      setLoading(true)
      const res = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=<>')
      const { near_earth_objects } = await res.json()

      setAsteroids(near_earth_objects)
      setLoading(false)
    }

    fetchAsteroids()
    console.log(asteroids)
  }, [])



  return (
  
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Asteroids asteroids={asteroids} />
          </Route>  
          <Route path="/details">
            <AstDetails />
          </Route> 
        </Switch>
      </Router>    
      
    
  );
}

export default App;
