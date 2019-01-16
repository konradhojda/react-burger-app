import React, {Component} from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I have {props.age} years old!</p>
            <input type="text" onChange={props.changed} placeholder={props.name}/>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
