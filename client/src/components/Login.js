import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import ClassList from "./ClassList"
// can not replace real url in post, figure out later
import { BASE_URL, API_KEY } from '../utils/URL';  

// console.log('BASE_URL: ', BASE_URL);

export default function Login (props){
        const { isLoggedIn, role, message, setIsLoggedIn } = props; 
        
        const { push } = useHistory();

        const [login, setLogin] = useState({
            username: '',
            password: ''
        })

        const handleChange = (e) => {
            setLogin({
                ...login,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            
            axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/login`, login)  
                .then(resp => {                    
                    console.log('resp in Login: ', resp);
                    localStorage.setItem('token', resp.data.token);                    
                    localStorage.setItem('role', resp.data.role);
                    localStorage.setItem('message', resp.data.message);
                    props.setIsLoggedIn(localStorage.getItem('token'));      
                    push(`/classes`);                 
                })
                .catch(err => {
                    console.log(err);                
                })
        }

        return (<>
                           
            <nav className="nav-bar">
                <div className="left-links">
                    <Link className="link" to='/'>Anywhere Fitness</Link>                              
                </div>
                <div className="right-links">
                    { !props.isLoggedIn  && <div className="link"  > <Link className="link"  to='/register' >Register</Link></div>} </div>
            </nav>   
                    
                <div  >
                     
                    <div >                             
                        <form onSubmit={handleSubmit} >
                            <h1 >Please sign in</h1>
                            <label htmlFor="username" > 
                                <input 
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={login.username}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="password">
                                <input 
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={login.password}
                                    onChange={handleChange}
                                />
                            </label>
                            <button >Login</button>
                        </form> 
                            <div>Don't have an account?
                            <button ><Link className="link-1" to='/register'>Register</Link></button> 
                            
                            </div>                    
                    </div > 
                </div>
            
        </>)
}