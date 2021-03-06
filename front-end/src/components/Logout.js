import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Logout = (props)=> {
    
    console.log('useHistory: ', useHistory());

    const { push } = useHistory();

    useEffect(()=>{
        
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("message");
        props.setIsLoggedIn(localStorage.getItem('token'));    

        push ("/login");      

      }, []);    

        return(<div></div>);
}

export default Logout;