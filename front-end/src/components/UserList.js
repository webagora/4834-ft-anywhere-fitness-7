import React, { useEffect, useState } from 'react';
import UserListItem from "./UserListItem";
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import LoggedInHeader from './LoggedInHeader';
import SideBarClassList from './SideBarClassList';
import LoggedInFooter from './LoggedInFooter';

export default function Users (props) {

    const { users, setUsers, isLoggedIn, role, message , displayUser, displaySideBar,  setDisplaySideBar, setDisplayUser } = props;

    const sideBarClasses = [];

    useEffect(() => {
        axiosWithAuth()
            .get('/users/')          
            .then (resp => {  
                console.log('resp in UserList:', resp);                           
                setUsers(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
    return(<>
        
        <nav className="nav-bar">
            <div className="left-links"> <Link className="link" to='/'><h2>Anywhere Fitness</h2> </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'><h4>Logout</h4></Link>} 
            { !props.isLoggedIn && <Link className="link"  to='/login'> <h4>Login</h4> </Link> } </div> 
        </nav>            

        <div className="container">            
        <LoggedInHeader isLoggedIn={isLoggedIn} role={role} message={message} displayUser = {displayUser} setDisplayUser = {setDisplayUser} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar } />
            <div className="row ">
                { (isLoggedIn && displaySideBar) && <SideBarClassList role={role}  sideBarClasses={sideBarClasses}/>}

                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>User_id </th>
                            <th>Username </th>
                            <th>Role_type </th>                                                      
                        </tr>
                        </thead>
                        <tbody>                           
                            {users.map(user=><UserListItem key={user.user_id} user={user} message = {message} isLoggedIn = {isLoggedIn} role = {role}/>)}
                        </tbody>
                    </table>
                    {/* <LoggedInFooter totalClasses={classes.length}/> */}
                </div>

            </div>
        </div>        

    </>);
}