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
              <Route path="/login"> <Login setIsLoggedIn = { setIsLoggedIn } isLoggedIn = { isLoggedIn } role = {role} message = {message} /> </Route> 
              <Route path="/logout"> <Logout setIsLoggedIn = { setIsLoggedIn } /> </Route> 
              {/* <Route path="/register"> <Register /> </Route>  */}
              <Route path="/user" render={props => <User {...props} deleteMovie={deleteUser} />} />
              <Route path="/users"> <UserList users = { users } setUsers = { setUsers } /> </Route>

              <Route path='/classes/add'><AddClassForm classes = {classes} setClasses={setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} displaySideBar = {displaySideBar}  setDisplaySideBar = {setDisplaySideBar } /></Route> 

              <Route
              path="/classes/:id"
              render={props => <Class {...props} deleteClass={deleteClass} message = {message} isLoggedIn = {isLoggedIn} role = {role} displaySideBar = {displaySideBar}  setDisplaySideBar = {setDisplaySideBar }  />}
              // render={props => <Item match = {props.match} history = {props.history} setItems={setItems} />}
              />

              {/* <Route path="/classes/:id"> <Class classes = { classes } deleteClass={deleteClass} message = {message} isLoggedIn = {isLoggedIn} role = {role}  /> </Route> */}
              <Route exact path="/classes"> <ClassList classes = { classes } setClasses = { setClasses} message = {message} isLoggedIn = {isLoggedIn} role = {role} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar } /> </Route>
              
              <Route path="/"> <Redirect to="/classes"/> </Route> 
        </Switch>
        
        <div className="footer-page">
          <Footer/>
        </div>
     
    </div>
    
  );
}

export default App;