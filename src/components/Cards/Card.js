import React from 'react';
import './Card.css';

function Card (props) {
  console.log(props);
return(
  <div className="uk-grid-match" uk-grid="true">
    <div>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body">
        <h3 className="uk-card-title">{props.emp.first_name + ' ' + props.emp.last_name}</h3>
        <p className="uk-margin-small-top">{props.emp.country}</p>
        <p className="uk-margin-small-top">{props.emp.department}</p>
        <p className="uk-text-truncate">{props.emp.email}</p>
      </div>
    </div>
  </div>
);
}

export default Card