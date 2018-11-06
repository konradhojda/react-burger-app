import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
      <div className="userOutput">
          <p>My username is: {props.username}</p>
          <p>It's will be overwritten!</p>
      </div>
  )
};

export default userOutput;