import React, {Component} from 'react';
import Card from './components/Cards';
import db from './db/db.json';

class App extends Component{

  state ={
    
  }

 
  render(){
    
    return(
      <div className="uk-container">
        {db.map(emp => <Card emp={emp} />)}
      </div>
    );
  }
}
export default App;
