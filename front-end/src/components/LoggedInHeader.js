import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInHeader = (props)=> {
    const {displaySideBar, isLoggedIn, role, message, setDisplaySideBar} = props;

    console.log('displaySideBar:', displaySideBar);
    
    const toggleDisplay = () => {
        setDisplaySideBar(current => !current)
    }     

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            {isLoggedIn && <h2>{message}, as a {role} </h2>}
            {!isLoggedIn && <h2> Yor are Welcome, wanna to join? </h2>}
        </div>
        <div className="col-sm-6">
            {(role === 'client' && isLoggedIn) && <div onClick = {toggleDisplay} className="btn btn-sm btn-primary"><span>{ displaySideBar ? "Hide" : "Show"} favorites</span></div>}
            {(role === 'instructor' && isLoggedIn) && <div onClick = {toggleDisplay} className="btn btn-sm btn-primary"><span>{ displaySideBar ? "Hide" : "Show"} favorites</span></div>}
            {/* {(role === 'client' && isLoggedIn) && <Link to = "#" className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Join New Class</span></Link>} */}
            {(role === 'instructor' && isLoggedIn) && <Link to = '/classes/add' className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Class</span></Link>}
            {(role === 'client' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">View All joined</Link>}
            {/* {(role === 'instructor' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">View teaching</Link>} */}
            {isLoggedIn && <Link to ="/classes" className="btn btn-primary">View All Classes</Link>}
        </div>
        </div>
    </div>);
}

export default LoggedInHeader;