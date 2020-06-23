import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Admin from './Components/AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header/>
        <Switch>
          {/* Routes */}
          <Route exact path="/login" component={()=>{return <Login/>
          }}/>
          <Route exact path="/admin" component={()=>{return <Admin displayPage={"Users"} class={true}/>
          }}/>
          <Route exact path="/admin/users" component={()=>{return <Admin displayPage={"Users"} class={true}/>
          }}/>
          <Route exact path="/admin/projects" component={()=>{return <Admin displayPage={"Projects"}/>
          }}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
