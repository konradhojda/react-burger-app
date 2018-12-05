import React, {Component} from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I have {props.age} years old!</p>
            <input type="text" onChange={props.changed}/>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
