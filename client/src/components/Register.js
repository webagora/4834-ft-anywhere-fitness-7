import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../CSS/Register.css';
import axios from 'axios';

export default function Register (props) {

    const [submitted, setSubmitted] = useState(false);

    const [error, setError] = useState(false);

    const { push } = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        department: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        
        axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/register`, newUser)
            .then(resp => {
                console.log('resp.data in Register.js: ', resp.data);
                // alert(`Your role is: ${resp.data.role}, you need your prop role to do something!`);
                push('/login');
            })
            .catch(err => {
                console.log(err);
            })

        if (newUser.username === '' || newUser.password === ''){
            setError(true);
        } 
        // else {
        //     setSubmitted(true);
        //     setError(false);
            
        // }
    };

    const successMessage = () => {
        return (
            <div className="success" style ={{display: submitted ? '' : 'none',}}>
                <h1>{newUser.username} successfully registered!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="error" style={{display: error ? '' : 'none',}}>
                <h1>Please fill out all fields.</h1>
            </div>
        )
    }

    return ( <>

            <nav className="nav-bar">
                <div className="left-links">
                    <Link className="link" to='/'>Anywhere Fitness</Link>                             
                </div>
                <div className="right-links">                  
                    { !props.isLoggedIn && <div className="member" >  <Link className="link"  to='/login'>  Login </Link> </div>}  
                </div>
            </nav>

        <form className="form-container" >
            <div className="form-group submit">
                <h2>Register here!</h2>

                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
            </div>
            <div className="form-group submit">
                <h6>Enter information below</h6>

                <label className="form-label">Username:
                    <input
                    className ="form-input"
                    value = {newUser.username}
                    onChange={handleChange}
                    name = 'username'
                    type ='text'
                    placeholder = 'Please enter a username'
                    />
                </label>
                <label> Password:
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                </label>
                <label className="form-label">Role:
                    <select
                    // className ="form-role"
                    onChange={handleChange}
                    value = {newUser.role}
                    name = 'role_type'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='client'>Client</option>
                        <option value ='instructor'>Instructor</option>                        
                    </select>
                </label>
                <p>As a instructor, please type your auth_code to be registered</p>
                 <label> Auth_code:
                    <input 
                        type="text"
                        name="auth_code"
                        placeholder="auth_instructor_123"
                        value={newUser.auth_code}
                        onChange={handleChange}
                    />
                </label>

                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
            </div>
        </form>
    </>)
}