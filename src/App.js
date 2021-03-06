import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Admin from './Components/AdminPage';
import Homepage from './Components/HomePage';
import UserPage from './Components/UserPage'
import './App.css';

function App() {
  const IsLoggedInfo = useSelector(state=>state.isLogged)
  const users = useSelector(state=>state.Users)
  const UserIndex = useSelector(state=>state.isLogged.userIndex)

  const PrivateRoute = ({component: Component})=> {
    return(
      <Route render={()=>{
        if(IsLoggedInfo.isLogged===true){
          if(IsLoggedInfo.user==="user"){
            return(
              <Component/>
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


  const IsLoggedRoute = ({component: Component})=> {
    return(
      <Route render={()=>{
        if(IsLoggedInfo.isLogged===true){
          if(IsLoggedInfo.user==="user"){
            return(
              <Redirect to={"/timetracker/user="+users[UserIndex].id} />
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
          <Route exact path="/" component={()=>{return <Homepage/>}}/>
          <IsLoggedRoute exact path="/signup" component={()=>{return <SignUp/>}}/>
          <IsLoggedRoute exact path="/login" component={()=>{return <Login/>}}/>
          <AdminRoute exact path="/admin" component={()=>{return <Admin displayPage={"Users"} class={true} />
          }}/> 
          <AdminRoute exact path="/admin/users" component={()=>{return <Admin displayPage={"Users"} class={true}/>
          }}/>
          <AdminRoute exact path="/admin/projects" component={()=>{return <Admin displayPage={"Projects"} class={false}/>
          }}/>
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/timetracker/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"Timetracker"}/>}}/>
          })}
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/project/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"Project"}/>}}/>
          })}
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/users/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"Users"}/>}}/>
          })}
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/last7days/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"Last 7 days"}/>}}/>
          })}
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/thismonth/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"This month"}/>}}/>
          })}
          {users.map((user,index)=>{
            return <PrivateRoute exact path={"/spesifictime/user="+user.id} key={"user"+index} component={()=>{return <UserPage displayPage={"Spesific time"}/>}}/>
          })}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
