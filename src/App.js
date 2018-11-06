import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

import './App.css';

class App extends Component {

    state = {
        username: 'Kon'
    };

    usernameStateManipulator = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
            <UserInput changed={this.usernameStateManipulator} currentValue={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username="konJon"/>
            </div>
        )
    }
}

export default App;
