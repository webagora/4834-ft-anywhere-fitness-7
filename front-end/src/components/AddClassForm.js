import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import LoggedInHeader from './LoggedInHeader';
import FavoriteClassList from './FavoriteClassList';

const AddClassForm = (props) => {
    const {isLoggedIn, role, message, classes, favoriteClasses, displayFavorites, setClasses} = props;

    const { push } = useHistory();
 
    const [newClass, setNewClass] = useState({
        class_name: "", 
        class_duration: "1 hour", 
        max_class_size: 20, 
        class_date: "2001-11-17", 
        start_time: "01:00:00", 
        class_location: "", 
        class_instructor: 5, 
        intensity_id: 1, 
        type_id: 1
    });

    const handleChange = (e) => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        axiosWithAuth()
            .post(`/classes/add`, newClass)          
            .then (resp => {      
                // console.log('resp.data in AddForm.js: ', resp.data);          
                // setClasses(resp.data);
                // The following code is really bad - !!!!
                // setClasses(resp.data);
                push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    const {class_name, class_duration, max_class_size, class_date, start_time, class_location, class_instructor, intensity_id, type_id } = newClass;
    
    return(<>

        <nav className="nav-bar">
            <div className="left-links"> <Link className="link" to='/'><h2>Anywhere Fitness</h2> </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'><h4>Logout</h4></Link>} 
            {!props.isLoggedIn && <Link className="link"  to='/login'> <h4>Login</h4> </Link> } </div> 
        </nav>

        <div className="container">
            <LoggedInHeader isLoggedIn={isLoggedIn} role={role} message={message} />
            <div className="row ">
                { (isLoggedIn && displayFavorites) && <FavoriteClassList favoriteClasses={favoriteClasses}/>}
        
                <div className="col">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">						
                                    <h4 className="modal-title">Add Class</h4>
                                </div>

                                <div className="modal-body">					
                                    <div className="form-group">
                                        <label>Class name: </label>
                                        <input value={class_name} onChange={handleChange} name="class_name" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Class duration: </label>
                                        <input value={class_duration} onChange={handleChange} name="class_duration" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Max class size: </label>
                                        <input value={max_class_size} onChange={handleChange} name="max_class_size" type="number" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Class date: </label>
                                        <input value={class_date} onChange={handleChange} name="class_date" type="date" className="form-control"/>
                                    </div>		
                                    <div className="form-group">
                                        <label>Start time: </label>
                                        <input value={start_time} onChange={handleChange} name="start_time" type="time" className="form-control"/>
                                    </div>		
                                    <div className="form-group">
                                        <label>Class location: </label>
                                        <input value={class_location} onChange={handleChange} name="class_location" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Class instructor: </label>
                                        <input value={class_instructor} onChange={handleChange} name="class_instructor"  type="number"  className="form-control" /> 
                                    </div>
                                    <div className="form-group">
                                        <label>Intensity id: </label>
                                        <input value={intensity_id} onChange={handleChange} name="intensity_id"  type="number"  className="form-control" /> 
                                    </div>
                                    <div className="form-group">
                                        <label>Type id: </label>
                                        <input value={type_id} onChange={handleChange} name="type_id"  type="number"  className="form-control" /> 
                                    </div>
                                                
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-success" value="Add"/>
                                    <Link to={'/classes'}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>);
}

export default AddClassForm;