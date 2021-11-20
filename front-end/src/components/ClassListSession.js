import React from 'react';
import { Link } from 'react-router-dom';

const ClassListSession = (props)=> {
  const { class_id, class_name, intensity_level, instructor, class_location} = props.session;

  return(<tr key={class_id}>
      <td>{class_name}</td>
        <td>{intensity_level}</td>
        <td>{instructor}</td>
        <td>{class_location}</td>  
      <td>
        <Link to={`/classes/${class_id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View"/>
        </Link>
      </td>
  </tr>);
}

export default ClassListSession;