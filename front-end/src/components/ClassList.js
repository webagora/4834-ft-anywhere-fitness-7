import React, { useEffect } from 'react';
import ClassListSession from './ClassListSession';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import LoggedInHeader from './LoggedInHeader';
import FavoriteClassList from './FavoriteClassList';
import LoggedInFooter from './LoggedInFooter';


const ClassList = (props)=> {
    const { isLoggedIn, role, message, classes, setClasses, favoriteClasses, displaySideBar, setDisplaySideBar } = props;    

    useEffect(() => {
        axiosWithAuth()
            .get('/classes/')          
            .then (resp => {                
                setClasses(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
      }, []);

    return (<>
        
        <nav className="nav-bar">
            <div className="left-links"> <Link className="link" to='/'><h2>Anywhere Fitness</h2> </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'><h4>Logout</h4></Link>} 
            { !props.isLoggedIn && <Link className="link"  to='/login'> <h4>Login</h4> </Link> } </div> 
        </nav>            

        <div className="container">            
            <LoggedInHeader isLoggedIn={isLoggedIn} role={role} message={message} displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar } />
            <div className="row ">
                { (isLoggedIn && displaySideBar) && <FavoriteClassList favoriteClasses={favoriteClasses}/>}
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Intensity</th>
                            <th>Instructor</th>
                            <th>Location</th>                                
                        </tr>
                        </thead>
                        <tbody>                           
                            {classes.map(session=><ClassListSession key={session.class_id} session={session} message = {message} isLoggedIn = {isLoggedIn} role = {role} />) }
                        </tbody>
                    </table>
                    <LoggedInFooter totalClasses={classes.length}/>
                </div>

            </div>
        </div>

    </>);
}

export default ClassList;