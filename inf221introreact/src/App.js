import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Person from './components/person.component';
// import Form from './components/form.component';
// import UserInput from './components/input.field';

class App extends Component {

  nums = [12, 12, 23, 23]

  // list of course objects
  courses = [
    {
        id: 0,
        name: 'INF221',
        description: 'Web Design and Development',
        numberOfStudents: 62
    },
    {
        id: 1,
        name: 'COM121',
        description: 'Intro. to Computer Programming',
        numberOfStudents: 200
    },
    {
        id: 2,
        name: 'COM222',
        description: 'Advanced Programming',
        numberOfStudents: 80
    },
  ];

  renderCourses = (courses) => {

    const filtered = courses.filter((course) => {
      if(course.numberOfStudents < 100) {
        return course;
      }

      return false;
    })


    return filtered.map((course) => {
      return (
        <div id={course.id} key={course.id} style={{ textAlign: `center` }}>
          { course.name } { course.description }{ '(' + course.numberOfStudents + ' students)'}
        </div>
      )
    })

  }

  renderNums = () => {

    return this.nums.map((num, key) => {
      console.log(num);
      return <div key={key} style={{ textAlign: `center` }}>{ num }</div>
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* <Person fname="John" lname="Doe"></Person> */}
        {/* <Person fname="Martin" lname="James"></Person> */}
        
        {/* <Form />
        <UserInput /> */}

        {/* {
          this.renderNums()
        } */}
        {
          this.renderCourses(this.courses)
        }
      </div>
    );
  }
}

export default App;
