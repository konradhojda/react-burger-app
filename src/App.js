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
        ],
        showPersons: false
    };

    changeName = () => {
        this.setState({
            persons: [
                {
                    name: 'OtherName 1',
                    age: 20
                },
                {
                    name: 'Antony',
                    age: 25
                },
                {
                    name: 'Patricia Patricia',
                    age: 25
                }
            ]
        })
    };

    changedValue = (e) => {
        this.setState({
            persons: [
                {
                    name: e.target.value,
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
        })
    };

    togglePersons = () => {
        this.setState({
            showPersons: true
        });
    };

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person changed={this.changedValue}
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name}
                            age={this.state.persons[1].age}/>
                    <Person name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Simple React Header</h1>
                <p>It's working!</p>
                <button onClick={this.togglePersons}>Click to switch the name</button>
                {persons}
            </div>
        );
    }
}

export default App;
