import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

    state = {
        persons: [
            {
                name: 'Andrew',
                age: 20
            },
            {
                name: 'Antony',
                age: 25
            },
            {
                name: 'Patricia',
                age: 22
            }
        ]
    };

    changeName = () => {
        console.log('clicked!');
    };

    render() {
        return (
            <div className="App">
                <h1>Simple React Header</h1>
                <p>It's working!</p>
                <button onClick={this.changeName}>Click to switch the name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
