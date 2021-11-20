import React, { useEffect, useState } from 'react';
import ClassListSession from './ClassListSession';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import ClassHeader from './ClassHeader';
import FavoriteClassList from './FavoriteClassList';


const ClassList = (props)=> {
    const { classes, setClasses, favoriteClasses } = props;

    useEffect(()=>{
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
            <div className="left-links"> <Link className="link" to='/'>Anywhere Fitness </Link> </div>
            <div className="right-links"> {props.isLoggedIn && <Link className="link" to='/logout'>Logout</Link>} </div>
        </nav>            

        <div className="container">            
            <ClassHeader/>
            <div className="row ">
                <FavoriteClassList favoriteClasses={favoriteClasses}/>

                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                        <th>Name</th>
                                <th>Intensity</th>
                                <th>Instructor</th>
                                <th>Location</th>
                                <th></th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                classes.map(session=><ClassListSession key={session.id} session={session}/>)
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