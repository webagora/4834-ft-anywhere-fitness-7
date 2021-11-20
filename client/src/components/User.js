import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const User = (props) => { 
    const [user, setUser] = useState('');    
    const { push } = useHistory();

    useEffect(()=>{
        axiosWithAuth()
            .get('/user/')          
            .then (resp => {                
                setUser(resp.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    console.log('suer in User', user);

    const handelDelete = ()=> {       
        // axios.delete(`http://localhost:5000/api/movies/${id}`)
        //     .then(res=>{
        //         console.log('res in delete: ', res);                
        //         console.log('props in delete: ', props);  
        //         //	Update local storage with our new movie list  
		// 	    props.deleteMovie(id);
		// 	    //	Redirect the user to the movie list page.
		// 	    push (`/movies`);             
        //     })
        //     .catch(err=>{
        //         console.log(err.response);
        //     })
       }

    return(<div className="class-wrapper">        						
                    <h4 >{user.username} </h4> 
                    <div >                       
                            <div>
                                <label>Id: <strong>{user.user_id}</strong></label>
                            </div>
                            <div>
                                <label>Username: <strong>{user.username}</strong></label>
                            </div>
                            <div>
                                <label>Role_type: <strong>{user.role_type}</strong></label>
                            </div>
                        <section>                           
                            {/* <Link to={`/movies/edit/${user_id}`} className="m-2 btn btn-success">Edit</Link> */}
                            {/* <span className="delete" onClick = {handelDelete}  ><input type="button" className="m-2 btn btn-danger" value="Delete"/></span> */}
                        </section>
                    </div>
             
        
    </div>);
}

export default User;