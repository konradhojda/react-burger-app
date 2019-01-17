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

        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

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
            style.backgroundColor = 'red';
        }

        let classes = [];
         if (this.state.persons.length <= 2) {
             classes.push('red');
         }
         if (this.state.persons.length <= 1) {
             classes.push('bold');
         }


        return (
            <div className="App">
                <h1>Simple React Header</h1>
                <p className={classes.join(' ')}>It's working!</p>
                <button style={style} onClick={this.togglePersons}>Click to switch the name</button>
                {persons}
            </div>
        );
    }
}

export default App;
