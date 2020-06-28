import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Admin from './Components/AdminPage';
import Homepage from './Components/HomePage';
import Timetracker from './Components/Timetracker'
import Summary from './Components/Summary'
import Project from './Components/Project'
import Users from './Components/Users'
import Last7days from './Components/Last7days'
import ThisMonth from './Components/ThisMonth'
import SpesificTime from './Components/SpesificTime'
import { useSelector } from 'react-redux'


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
          {/* {users.map((user,index)=>{
            return <PrivateRoute exact path={"/user="+user[0].userName} key={"user"+index} component={()=>{return <UserPage Settings={"General"}/>}}/>
          })} */}
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
            return <PrivateRoute exact path={"/timetracker/user="+user.id} key={"user"+index} component={()=>{return <Timetracker/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/summary/user="+user.id} key={"user"+index} component={()=>{return <Summary/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/project/user="+user.id} key={"user"+index} component={()=>{return <Project/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/users/user="+user.id} key={"user"+index} component={()=>{return <Users/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/last7days/user="+user.id} key={"user"+index} component={()=>{return <Last7days/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/thismonth/user="+user.id} key={"user"+index} component={()=>{return <ThisMonth/>}}/>
          })}
                    {users.map((user,index)=>{
            return <PrivateRoute exact path={"/spesifictime/user="+user.id} key={"user"+index} component={()=>{return <SpesificTime/>}}/>
          })}
          {/* <Route exact path='/timetracker' component={()=> <Timetracker/>}/>
          <Route exact path='/summary' component={()=> <Summary/>}/>
          <Route exact path='/project' component={()=> <Project/>}/>
          <Route exact path='/users' component={()=> <Users/>}/>
          <Route exact path='/last7days' component={()=> <Last7days/>}/>   
          <Route exact path='/thismonth' component={()=> <ThisMonth/>}/>
          <Route exact path='/spesifictime' component={()=> <SpesificTime/>}/> */}
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
