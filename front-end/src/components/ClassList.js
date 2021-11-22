import React, { useEffect } from 'react';
import ClassListSession from './ClassListSession';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import ClassHeader from './ClassHeader';
import FavoriteClassList from './FavoriteClassList';


const ClassList = (props)=> {
    const { isLoggedIn, role, message, classes, setClasses, favoriteClasses, displayFavorites } = props;

    console.log('props in ClassList: ', props);

    useEffect(() => {
        axiosWithAuth()
            .get('/classes/')          
            .then (resp => {                
                console.log('resp in ClassList.js: ', resp);
                setClasses(resp.data);
            })
            .catch(err => {
                console.log(err);
            })
      }, []);

    return (<>
        
        <nav className="nav-bar">
            <div className="left-links"> <Link className="link" to='/'><h2>Anywhere Fitness</h2> </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'><h4>Logout</h4></Link>} 
            { !props.isLoggedIn && <Link className="link"  to='/login'> <h4>Login</h4> </Link> } </div> 
        </nav>            

        <div className="container">            
            <ClassHeader isLoggedIn={isLoggedIn} role={role} message={message} />
            <div className="row ">
                { (isLoggedIn && displayFavorites) && <FavoriteClassList favoriteClasses={favoriteClasses}/>}
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Intensity</th>
                            <th>Instructor</th>
                            <th>Location</th>                                
                        </tr>
                        </thead>
                        <tbody>
                            {/* <div>{ console.log('classes in ClassList:', classes) }</div> */}
                            {                                
                                classes.map(session=><ClassListSession key={session.class_id} session={session} message = {message} isLoggedIn = {isLoggedIn} role = {role} />)
                            }
                        </tbody>
                    </table>
                    {/* <MovieFooter totalMovies={movies.length}/> */}
                </div>

            </div>
        </div>

    </>);
}

export default ClassList;