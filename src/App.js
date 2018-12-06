import React, {Component} from 'react';
import Validation from './Person/Validation'
import Char from './Person/Char'
import './App.css';

class App extends Component {

    state = {
        userInput: ''
    };


    inputChangeHandler = (e) => {
        this.setState( { userInput: e.target.value } );
    };

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    };

    render() {

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharHandler(index)} />;
        });

        return (
            <div>
                <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
                <Validation inputLength={this.state.userInput.length}/>
                {charList}
            </div>
        )}
}

export default App;
