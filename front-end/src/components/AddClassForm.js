import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import { Link, useHistory } from 'react-router-dom';

const AddClassForm = (props) => {
    const {isLoggedIn, role, classes, setClasses} = props;

    const { push } = useHistory();
    console.log('push in AddClassForm: ', push);

    const [newClass, setNewClass] = useState({
        class_name: "TAI CHI basics", class_duration: "1 hour", max_class_size: 0, class_date: "2021-11-17T00:00:00.000Z", start_time: "08:00:00", class_location: "", class_instructor: 1, intensity_id: 1, type_id: 1
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
                console.log('resp.data in AddForm.js: ', resp.data);          
                setClasses(resp.data);
                push('/classes');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const {class_name, class_duration, max_class_size, class_date, start_time, class_location, class_instructor, intensity_id, type_id } = newClass;
    
    return(
        
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
                                <input value={class_date} onChange={handleChange} name="class_date" type="text" className="form-control"/>
                            </div>		
                            <div className="form-group">
                                <label>Start time: </label>
                                <input value={start_time} onChange={handleChange} name="start_time" type="text" className="form-control"/>
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
    );
}

export default AddClassForm;