import React from 'react';
import { Link } from 'react-router-dom';

const SideBarClassList = (props) => {
    const { role, sideBarClasses } = props;

    return (<div className="col-xs savedContainer">
        {role === "instructor" && <h5>Teaching classes</h5>}
        {role === "client" && <h5>Attending classes</h5>}
        {/* {
            sideBarClasses.map(session=>{
                return <Link key={session.id} className="btn btn-light savedButton" to={`/classes/${session.id}`}>{session.name}</Link>
            })
        } */}
    </div>);
}

export default SideBarClassList;