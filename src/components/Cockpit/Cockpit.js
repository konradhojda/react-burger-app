import React from 'react';
import classes from "./Cockpit.css";
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const assignedClass = [];
    let buttonClass = classes.Button;
    if (props.showPersons) {
        buttonClass = [classes.Button, classes.red].join(' ');
    }
    if (props.persons.length <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClass.push(classes.bold);
    }

    return (
        <Aux>
            <h1>Simple React Header</h1>
            <p className={assignedClass.join(' ')}>It's working!</p>
            <button className={buttonClass} onClick={props.clicked}>Click to switch the</button>
        </Aux>
    )
};

export default cockpit;


