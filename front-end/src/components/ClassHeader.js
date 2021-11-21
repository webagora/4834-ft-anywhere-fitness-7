import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = () => {
    // toggleFavorites();
}


const ClassHeader = (props)=> {
    const {displayFavorites, isLoggedIn, role, message} = props;

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            {isLoggedIn && <h2>{message}, a {role} </h2>}
            {!isLoggedIn && <h2> Yor are Welcome, wanna to join? </h2>}
        </div>
        <div className="col-sm-6">
            {(role === 'client' && isLoggedIn) && <div onClick = {handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} favorites</span></div>};
            {(role === 'instructor' && isLoggedIn) && <div onClick = {handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} favorites</span></div>};
            {/* {(role === 'client' && isLoggedIn) && <Link to = "#" className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Join New Class</span></Link>} */}
            {(role === 'instructor' && isLoggedIn) && <Link to = '/addclass' className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Class</span></Link>}
            {(role === 'client' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">View All joined</Link>}
            {/* {(role === 'instructor' && isLoggedIn) && <Link to ="/classes" className="btn btn-primary">View teaching</Link>} */}
            {isLoggedIn && <Link to ="/classes" className="btn btn-primary">View All Classes</Link>}
        </div>
        </div>
    </div>);
}

export default ClassHeader;