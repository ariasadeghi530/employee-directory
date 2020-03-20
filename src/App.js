import React, {Component} from 'react';
import Card from './components/Cards';
import Form from './components/Form'
import db from './db/db.json';
import Navbar from './components/Navbar'

class App extends Component {

  state ={
    searchInp: '',
    input: '',
    category: 'country',
    categorySel: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({searchInp: this.state.input, input: '', category: '', categorySel: this.state.category})
  }
  handleSelectChange = event => {
    this.setState({category: (event.target.value).toLowerCase()})
  }
  renderEmployees (cat) {
    if(this.state.searchInp !== ''){
    
    return db.map((emp, i) => {
     if(cat === 'department'){
       if(emp.department === this.state.searchInp){
         return <Card emp={emp} key={i} />
       } 
      }
      else{
        if (emp.country === this.state.searchInp) {
          return <Card emp={emp} key={i} />
        }
      }
     })
    }
    else {
     return db.map((emp, i) => {
        
      return <Card emp={emp} key={i} />
    })
    }
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
        {this.renderEmployees(this.state.categorySel)}
        </div>
      </div>
      </>
    );
  }
}

export default App;
