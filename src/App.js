import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Admin from './Components/AdminPage';
// import { useSelector } from 'react-redux'


function App() {
  // const IsLoggedInfo = useSelector(state=>state.isLogged)

  // const PrivateRoute = ({component: Component})=> (
  //   <Route render={()=>(
  //     IsLoggedInfo.isLogged===true? <Component/> : <Redirect to="/login" />
  //   )}/>
  // )
  
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header/>
        <Switch>
          {/* Routes */}
          {/* {users.map((user,index)=>{
            return <PrivateRoute exact path={"/user="+user[0].userName} key={"user"+index} component={()=>{return <UserPage Settings={"General"}/>}}/>
          })} */}
          {/* <PrivateRoute exact path="/login" component={()=>{return <Login/>}}/> */}
          <Route exact path="/login" component={()=>{return <Login/>
          }}/>
          <Route exact path="/admin" component={()=>{return <Admin displayPage={"Users"} class={true} />
          }}/>
          <Route exact path="/admin/users" component={()=>{return <Admin displayPage={"Users"} class={true}/>
          }}/>
          <Route exact path="/admin/projects" component={()=>{return <Admin displayPage={"Projects"} class={false}/>
          }}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
