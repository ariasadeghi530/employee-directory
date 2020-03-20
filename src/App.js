import React, {Component} from 'react';
import Card from './components/Cards';
import Form from './components/Form'
import db from './db/db.json';
import Navbar from './components/Navbar'

class App extends Component {

  state ={
    searchInp: '',
    input: '',
    category: 'Country'
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({searchInp: this.state.input, input: ''})
  }
  handleSelectChange = event => {
    this.setState({category: event.target.value})
  }
 
  render(){
    
    return(
      <>
      <Navbar />
      <div className="uk-container">
        <Form 
        input={this.state.input}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        handleSelectChange={this.handleSelectChange}
        />
        <div className="uk-row">
        {db.map((emp, i ) => <Card emp={emp} key={i}/>)}
        </div>
      </div>
      </>
    );
  }
}

export default App;
