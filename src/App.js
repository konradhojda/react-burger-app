import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Andrew', age: 20},
            {id: '2', name: 'Antony', age: 25},
            {id: '3', name: 'Patricia', age: 22}
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
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow
        });
    };

    deletePerson = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {

        let persons = null;
        let buttonClass = '';

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
            buttonClass = classes.Red;
        }

        const assignedClass = [];
        if (this.state.persons.length <= 2) {
            assignedClass.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClass.push(classes.bold);
        }


        return (
            <div className={classes.App}>
                <h1>Simple React Header</h1>
                <p className={assignedClass.join(' ')}>It's working!</p>
                <button className={buttonClass} onClick={this.togglePersons}>Click to switch the
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
