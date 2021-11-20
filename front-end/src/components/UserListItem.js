import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props)=> {
    
    const { user_id, username, role_type} = props.user;

    return(<div className="class-wrapper">
            <div>
                <h5> {user_id} </h5>            
                <h5> {username} </h5>
                <h5> {role_type} </h5>                 
            </div>
            
            <Link to={`/user`} >
                <input type="button" value="View"/>
            </Link>
        </div>
        );
}

export default MovieListItem;