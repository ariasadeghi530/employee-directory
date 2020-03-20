import React from 'react';
import './Form.css';

function Form (props) {
  
  return(
    <form>
     
        <label htmlFor="input">Employee Search</label>
        <input
          type="text"
          className="uk-input"
          name='input'
          value={props.input}
          onChange={props.handleInputChange} 
          />
      <select className="uk-select uk-margin-small-top"
      onChange={props.handleSelectChange}>
        <option>Country</option>
        <option>Department</option>
      </select>
      <button className="uk-button uk-button-primary uk-margin-small-top" onClick={props.handleFormSubmit}>Search</button>
    </form>
  );
}

export default Form;