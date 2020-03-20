import React from 'react';
import './Card.css';

function Card (props) {
  
return(
  <div  className="container" uk-grid="true">
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 className="uk-card-title uk-text-truncate">{props.emp.first_name + ' ' + props.emp.last_name}</h3>
        <p className="uk-margin-remove">Country: {props.emp.country}</p>
        <p className="uk-margin-remove uk-text-truncate">Department: {props.emp.department}</p>
        <p className="uk-margin-remove uk-text-truncate">{props.emp.email}</p>
      </div>
    </div>
  </div>
);
}

export default Card