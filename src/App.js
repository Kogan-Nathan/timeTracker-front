import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Timetracker from './components/Timetracker'
import Summary from './components/Summary'
import Project from './components/Project'
import Users from './components/Users'
import history from './History'

function App() {
  return (
    <div className="App">

      <Router history={history}>
      <Header/>
              <Switch>
                <Route exact path='/signup' component={()=><Signup/>}/>
                        <Route exact path='/timetracker' component={()=> <Timetracker/>}/>
                        <Route exact path='/summary' component={()=> <Summary/>}/>
                        <Route exact path='/project' component={()=> <Project/>}/>
                        <Route exact path='/users' component={()=> <Users/>}/>
              </Switch>
              <Footer/>
      </Router>
    </div>
  );
}

export default App;
