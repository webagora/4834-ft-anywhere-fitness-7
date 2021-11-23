import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const User = (props) => { 

    const { user_id, username, role_type} = props.user;

    // const [user, setUser] = useState('');    
    // const { push } = useHistory();

    // useEffect(()=>{
    //     axiosWithAuth()
    //         .get('/user/')          
    //         .then (resp => {                
    //             setUser(resp.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }, []);

    // console.log('suer in User', user);

    const handelDelete = ()=> {        
       }

    return(<>
    
    
    
    <tr key={user_id}>
            <td>{user_id}</td>
            <td>{username}</td>
            <td>{role_type}</td>            
            <td>
                <Link to={`/users/${user_id}`} className="view"> <input type="button" className="btn btn-secondary" value="View"/> </Link>          
            </td>
    </tr>

    </>);
}

export default User;