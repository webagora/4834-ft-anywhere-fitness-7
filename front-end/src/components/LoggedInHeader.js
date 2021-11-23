import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInHeader = (props)=> {
    const { isLoggedIn, role, message, displaySideBar,  setDisplaySideBar, displayUser, setDisplayUser } = props;    
    
    
    const toggleDisplaySideBar = () => {
        setDisplaySideBar(current => !current)
    }     

    const toggleDisplayUser = () => {
        setDisplayUser(current => !current)
    }     

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            {isLoggedIn && <h2>{message}, as a {role} you can </h2>}
            {!isLoggedIn && <h2> Yor are Welcome, wanna to join? </h2>}
        </div>
        <div className="col-sm-6">
            {(role === 'client' && isLoggedIn) && <div onClick = {toggleDisplaySideBar} className="btn btn-sm btn-primary"><span>{ displaySideBar ? "Hide" : "Show"} attending</span></div>}
            {(role === 'instructor' && isLoggedIn) && <div onClick = {toggleDisplaySideBar} className="btn btn-sm btn-primary"><span>{ displaySideBar ? "Hide" : "Show"} teaching</span></div>}
            {/* {(role === 'client' && isLoggedIn) && <Link to = "#" className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Join New Class</span></Link>} */}
            {(role === 'instructor' && isLoggedIn) && <Link to = '/classes/add' className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Class</span></Link>}
            {(role === 'client' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">Search a Class</Link>}
            {/* {(role === 'instructor' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">View teaching</Link>} */}
            {(role === 'instructor' && isLoggedIn) && <Link to = {displayUser ? "/classes" : "/users"} onClick = {toggleDisplayUser}  className="btn btn-primary"><span>View { displayUser ? "All Classes" : "All Users"}</span></Link>}
            {(role === 'client' && isLoggedIn)  && <Link to ="/classes" className="btn btn-primary">View All Classes</Link>}
        </div>
        </div>
    </div>);
}

export default LoggedInHeader;