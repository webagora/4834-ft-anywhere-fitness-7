import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'

import ClassHeader from './ClassHeader';
import FavoriteClassList from './FavoriteClassList';

const Class = (props) => {   
    
    const { favoriteClasses } = props;
    
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
            <div className="left-links">
                <Link className="link" to='/'>Anywhere Fitness &nbsp; {props.message}  </Link>                                                 
            </div>
            <div className="right-links">                                                         
                {(props.role === 'instructor' && props.isLoggedIn) && <Link className="link"  to='/create'>Create a Class</Link>  }                 
                {(props.role === 'client' && props.isLoggedIn) && <Link className="link"  to='/create'>Jion a Class</Link> }             
                {props.isLoggedIn && <Link className="link" to='/logout'>Logout</Link>}                       
            </div>
        </nav>

        <div className="container">
            <ClassHeader/>
            <div className="row ">
                <FavoriteClassList favoriteClasses={favoriteClasses}/>
    
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
                                            <span className="m-2 btn btn-dark">Add Class</span>
                                                
                                                <Link to={`/classes/${class_id}`} className="m-2 btn btn-success">Edit</Link>
                                            <span className="delete" onClick = {handelDelete}  ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
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