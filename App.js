import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/login" component={()=>{return <Login/>}}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
