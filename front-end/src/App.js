import Login from "./components/Login";
import Logout from "./components/Logout";
import ClassList from "./components/ClassList";
import Class from "./components/Class"

import {Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  // To carry the whole classes 
  const [classes, setClasses] = useState([]);
  const [users, setUsers] = useState([]);
  

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

  // const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const message = localStorage.getItem('message');

  const deleteUser = (id)=> {
    
  }

  const deleteClass = (id)=> {
    
  }

  return (
    <div className="App">     
        
        <Switch>
              {/* <Route exact path="/"> <Home  /> </Route>         */}
              <Route path="/login"> <Login setIsLoggedIn = { setIsLoggedIn } isLoggedIn = { isLoggedIn } role = {role} message = {message} /> </Route> 
              <Route path="/logout"> <Logout setIsLoggedIn = { setIsLoggedIn } /> </Route> 
              {/* <Route path="/register"> <Register /> </Route>  */}
              {/* <Route path="/user" render={props => <User {...props} deleteMovie={deleteUser} />} /> */}
              {/* <Route path="/users"> <UserList users = { users } setUsers = { setUsers } /> </Route>  */}

              <Route path="/classes/:id"> <Class classes = { classes } deleteClass={deleteClass} message = {message} isLoggedIn = {isLoggedIn} role = {role}  /> </Route>
              <Route path="/classes"> <ClassList classes = { classes } setClasses = { setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} /> </Route> 
        </Switch>
        
        <div className="footer-page">
          {/* <Footer/> */}
        </div>
     
    </div>
    
  );
}

export default App;