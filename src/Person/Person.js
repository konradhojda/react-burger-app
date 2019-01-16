import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I have {props.age} years old!</p>
            <input type="text" onChange={props.changed}/>
            <p>{props.children}{2+2}</p>
        </div>
    )
};

export default person;
