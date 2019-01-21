import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    const assignedClass = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.red;
    }
    if (props.persons.length <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClass.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Simple React Header</h1>
            <p className={assignedClass.join(' ')}>It's working!</p>
            <button className={buttonClass} onClick={props.clicked}>Click to switch the
            </button>
        </div>
    )
};

export default cockpit;


