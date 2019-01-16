import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Andrew', age: 20},
            {id: '2', name: 'Antony', age: 25},
            {id: '3', name: 'Patricia',age: 22}
        ],
        showPersons: false
    };

    changedValue = (e, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})

    };

    togglePersons = () => {
        this.setState({
            showPersons: true
        });
    };

    deletePerson = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name}
                                       age={person.age}
                        click={this.deletePerson.bind(index)}
                        key={person.id}
                        changed={(e) => this.changedValue(e, person.id)}/>
                    })}
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
