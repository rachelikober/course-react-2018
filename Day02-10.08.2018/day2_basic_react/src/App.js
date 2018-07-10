import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDownCountries from './DropDownCountries.js';

class App extends Component {

  constructor(props){
    super(props);
  
      fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
      .then(response => response.json()) 
      .then(data => {
      this.setState( {countries :  data});
      })
  }
  
  state = {
    countries :  []
  }

   

    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>   
          <DropDownCountries getContriesList={this.state.countries}/>  
      </div>
    );
  }
}

export default App;
