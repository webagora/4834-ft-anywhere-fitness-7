import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteClassList = (props) => {
    const { favoriteMovies } = props;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Classes</h5>
        {/* {
            favoriteMovies.map(movie=>{
                return <Link key={movie.id} className="btn btn-light savedButton" to={`/movies/${movie.id}`}>{movie.title}</Link>
            })
        } */}
    </div>);
}

export default FavoriteClassList;