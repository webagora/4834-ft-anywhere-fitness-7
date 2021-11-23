import Login from "./components/Login";
import Logout from "./components/Logout";
import ClassList from "./components/ClassList";
import Class from "./components/Class";
import AddClassForm from "./components/AddClassForm";

import Footer from "./components/Footer";
import User from "./components/User";
import UserList from "./components/UserList"

import {Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';

const initialDisplay = false;

function App() {  

  // To carry the whole classes 
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  const [displaySideBar, setDisplaySideBar ] = useState (initialDisplay) ;
  const [displayUser, setDisplayUser ] = useState (false) ;

  // const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const message = localStorage.getItem('message');
  
  const deleteClass = (id)=> {
    setClasses(
      classes.filter(session => session.id !== id)
   )    
  }

  return (
    <div className="App">     
        
        <Switch>
              {/* <Route exact path="/"> <Home  /> </Route>         */}
              {/* <Route path="/register"> <Register /> </Route>  */}
              <Route path="/login"> <Login setIsLoggedIn = { setIsLoggedIn } isLoggedIn = { isLoggedIn } role = {role} message = {message} displayUser = {displayUser} /> </Route> 
              <Route path="/logout"> <Logout setIsLoggedIn = { setIsLoggedIn } /> </Route>               
              <Route path="/user" render={props => <User {...props} message = {message} isLoggedIn = {isLoggedIn} role = {role} displaySideBar = {displaySideBar}  setDisplaySideBar = {setDisplaySideBar }  />} />              
              <Route path="/users"> <UserList users = { users } setUsers = { setUsers } message = {message} isLoggedIn = {isLoggedIn} role = {role} displayUser = {displayUser} setDisplayUser = {setDisplayUser} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar } /> </Route>

              <Route path='/classes/add'><AddClassForm classes = {classes} setClasses={setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} displayUser = {displayUser} setDisplayUser = {setDisplayUser} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar }/></Route> 
              <Route path="/classes/:id"><Class deleteClass={deleteClass} message = {message} isLoggedIn = {isLoggedIn} role = {role} displaySideBar = {displaySideBar}  setDisplaySideBar = {setDisplaySideBar }  /> </Route>
              <Route exact path="/classes"> <ClassList classes = { classes } setClasses = { setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} displayUser = {displayUser} setDisplayUser = {setDisplayUser} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar } /> </Route>              
              <Route path="/"> <Redirect to="/login"/> </Route> 
        </Switch>
        
        
    </div>
    
  );
}

export default App;