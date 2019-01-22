import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'


class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor!', props)
    }

    componentWillMount() {
        console.log('[App.js] inside ComponentWillMount()!')
    }

    componentDidMount() {
        console.log('[App.js] inside ComponentDidMount!')
    }


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
        console.log('[App.js] inside render method!');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePerson}
                    changed={this.changedValue}/>
            );
        }


        return (
            <WithClass classes={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersons}/>
                {persons}
            </WithClass>
        );
    }
}

export default App;
