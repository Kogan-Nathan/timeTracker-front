import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Admin from './Components/AdminPage';
import { useSelector } from 'react-redux'


function App() {
  const IsLoggedInfo = useSelector(state=>state.isLogged)

  const IsLoggedRoute = ({component: Component})=> {
    return(
      <Route render={()=>{
        if(IsLoggedInfo.isLogged===true){
          if(IsLoggedInfo.user==="user"){
            return(
              <Redirect to="/timetracker" />
            )
          }
          else{
            return(
              <Redirect to="/admin" />
            )
          }
        }
        else{
          return(
            <Component/>
          )
        }
      }}/>
    )
  }

  const AdminRoute = ({component: Component})=> {
    return(
      <Route render={()=>{
        if(IsLoggedInfo.isLogged===true){
          if(IsLoggedInfo.user==="admin"){
            return(
              <Component />
              
            )
          }
          else{
            return(
              <Redirect to="/" />
            )
          }
        }
        else{
          return(
            <Redirect to="/login" />
          )
        }
      }}/>
    )
  }


  
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
          <IsLoggedRoute exact path="/signup" component={()=>{return <SignUp/>}}/>
          <IsLoggedRoute exact path="/login" component={()=>{return <Login/>}}/>
          <AdminRoute exact path="/admin" component={()=>{return <Admin displayPage={"Users"} class={true} />
          }}/> 
          <AdminRoute exact path="/admin/users" component={()=>{return <Admin displayPage={"Users"} class={true}/>
          }}/>
          <AdminRoute exact path="/admin/projects" component={()=>{return <Admin displayPage={"Projects"} class={false}/>
          }}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
