import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Simple React Header</h1>
                <Person name="Konrad" age="30"/>
                <Person name="Max" age="24"> My hobby is: skying </Person>
                <Person name="Angel" age="22"/>
            </div>
        );
    }
}

export default App;
