import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Logout = (props)=> {
    
    console.log('useHistory: ', useHistory());

    const { push } = useHistory();

    const getLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("message");
        props.setIsLoggedIn(localStorage.getItem('token'));    

        push ("/login");      
    } 

    getLogOut();

        return(<div></div>);
}

export default Logout;