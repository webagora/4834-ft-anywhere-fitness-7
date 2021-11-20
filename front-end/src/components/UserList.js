import { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import UserListItem from "./UserListItem"

export default function Users (props) {

    const { users, setUsers } = props;

    useEffect(() => {
        axiosWithAuth()
            .get('/users/')          
            .then (resp => {                             
                setUsers(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
    return(
        <div>
            {
                users.map(user=><UserListItem key={user.id} user={user}/>)
            }
        </div>
    );
}