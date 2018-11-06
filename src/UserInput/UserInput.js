import React from 'react';

const userInput = (props) => {
    return (
            <input type="text"
                   onChange={props.changed}
                   defaultValue={props.currentValue}/>
    )
};

export default userInput;