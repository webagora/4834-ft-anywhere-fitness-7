import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'

import ClassHeader from './ClassHeader';
import FavoriteClassList from './FavoriteClassList';

const Class = (props) => {   
    
    const {isLoggedIn, role, message, favoriteClasses } = props;
    
    const [session, setSession] = useState('');

    const { class_id, class_name, intensity_level,class_date, start_time, class_duration, instructor, class_location} = session;

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
            axiosWithAuth()
            .get(`/classes/${id}`)          
            .then (resp => {                
                setSession(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
            
    }, [id]);
      
    const handelDelete = ()=> {    

    }
   
    return(<>
        <nav className="nav-bar">
            <div className="left-links"> <Link className="link" to='/'><h2>Anywhere Fitness</h2> </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'><h4>Logout</h4></Link>} 
            {!props.isLoggedIn && <Link className="link"  to='/login'> <h4>Login</h4> </Link> } </div> 
        </nav>

        <div className="container">
            <ClassHeader isLoggedIn={isLoggedIn} role={role} message={message} />
            <div className="row ">
                {isLoggedIn && <FavoriteClassList favoriteClasses={favoriteClasses}/>}
    
                <div className="modal-page col">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">	
                            <h4 className="modal-title">{session.class_name} Details</h4> 
                            </div>
                            <div className="modal-body">
                                <div className="flexContainer"> 

                                    <section className="movie-details">                           
                                        <div> <label>Class duration: <strong>{session.class_duration}</strong></label> </div> 
                                        <div> <label>Max class size: <strong>{session.max_class_size}</strong></label> </div> 
                                        <div> <label>Class Date: <strong>{session.class_date} </strong></label> </div>
                                        <div> <label>Time: <strong> {session.start_time}</strong></label> </div>
                                        <div> <label>Class location: <strong> {session.class_location}</strong></label> </div>
                                        <div> <label>Instructor: <strong>{session.instructor}</strong></label> </div>
                                        <div> <label>Intensity level: <strong>{session.intensity_level}</strong></label> </div>                            
                                        <div> <label>Type description: <strong>{session.type_description}</strong></label> </div>                            
                                        <div> <label>Number registered: <strong>{session.number_registered}</strong></label> </div>                                                    
                                        <div> <label>Class id: <strong>{session.class_id}</strong></label> </div>                                                    
                                    </section>
                                    <section>
                                        <div>
                                            {(role === 'instructor' && isLoggedIn) && <span className="m-2 btn btn-dark">Create New Class</span>}                                                
                                            {(role === 'client' && isLoggedIn) && <span className="m-2 btn btn-dark">Join Class</span>}                                                
                                            {(role === 'instructor' && isLoggedIn) && <Link to={`/classes/${class_id}`} className="m-2 btn btn-success">Edit</Link>}
                                            {(role === 'instructor' && isLoggedIn) && <span className="delete" onClick = {handelDelete}  ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>}
                                            {!isLoggedIn && <Link to={`/classes/`} className="m-2 btn btn-dark">View All joined</Link>}
                                        </div>
                                    </section>       

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>);

}

export default Class;