import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = (props)=> {
    
    const { user_id, username, role_type} = props.user;

    return(        

        <tr key={user_id}>
            <td>{user_id}</td>
            <td>{username}</td>
            <td>{role_type}</td>            
            <td>
                <Link to={`/users/${user_id}`} className="view"> <input type="button" className="btn btn-secondary" value="View"/> </Link>          
            </td>
        </tr>

    );
}

export default UserListItem;