import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons : [
      {name:'Santosh',age:43},
      {name:'Siyona', age:23},
      {name:'Samarth',age:22}
    ]

  }
  switchNameHandler = () => {
    console.log("Woooh wooh Its called");
     
     this.setState({
      persons : [
        {name:'Santosh Swain',age:13},
        {name:'Siyona Swain', age:13},
        {name:'Samarth Swain',age:12}
      ]
     })

  }
  render() {
    return (
      <div className="App"> <h1>My First React application</h1> 
      <button onClick={this.switchNameHandler}>Switch buttons</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies:Sleep</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies:Play</Person>
      </div>
      
    );
  }
}

export default App;
