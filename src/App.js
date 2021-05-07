import Home from './components/Home/Home';
import Asteroids from './components/Asteroids/Asteroids';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AstDetails from './components/AstDetails/AstDetails';
import PageNotFound from './components/Common/PageNotFound';

function App() {

  return (
  
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/asteroids">
            <Asteroids />
          </Route>  
          <Route path="/details/:id">
            <AstDetails />
          </Route> 
          <Route path="*">
            <PageNotFound />
          </Route> 
        </Switch>
      </Router>    
      
    
  );
}

export default App;
