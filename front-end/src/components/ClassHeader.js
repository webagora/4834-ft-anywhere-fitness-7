import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = () => {
    // toggleFavorites();
}

const displayFavorites = false;

const ClassHeader = ()=> {
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <div onClick = {handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            {/* <Link className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            <Link to="/movies" className="btn btn-primary">View All Movies</Link> */}
        </div>
        </div>
    </div>);
}

export default ClassHeader;