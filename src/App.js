import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About';
function App() {
  

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />}/>
          <Route path="/About" exact render={props => <About {...props} />}/>
        </Switch>
        </div>
      </div>
    </Router> 
    
  );
}

export default App;
