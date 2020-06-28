import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Signup from './components/Signup.js';
import {Router as Router, Switch, Route} from 'react-router-dom';
import Timetracker from './components/Timetracker'
import Summary from './components/Summary'
import Project from './components/Project'
import Users from './components/Users'
import history from './History'
import Last7days from './components/Last7days'
import ThisMonth from './components/ThisMonth'
import SpesificTime from './components/SpesificTime'
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Header/>
              <Switch>
              <Route exact path='/' component={()=><Homepage/>}/>
                <Route exact path='/signup' component={()=><Signup/>}/>
                        <Route exact path='/timetracker' component={()=> <Timetracker/>}/>
                        <Route exact path='/summary' component={()=> <Summary/>}/>
                        <Route exact path='/project' component={()=> <Project/>}/>
                        <Route exact path='/users' component={()=> <Users/>}/>
                        <Route exact path='/last7days' component={()=> <Last7days/>}/>   
                        <Route exact path='/thismonth' component={()=> <ThisMonth/>}/>
                        <Route exact path='/spesifictime' component={()=> <SpesificTime/>}/>
              </Switch>
              <Footer/>
      </Router>
    </div>
  );
}

export default App;
