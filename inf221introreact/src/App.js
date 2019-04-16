import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/person.component';
import Form from './components/form.component';
import UserInput from './components/input.field';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Person fname="John" lname="Doe"></Person>
        <Person fname="Martin" lname="James"></Person>
        <Form />
        <UserInput />

      </div>
    );
  }
}

export default App;
