import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
function App() {
  

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />}/>
        </Switch>
        </div>
      </div>
    </Router> 
    
  );
}

export default App;
