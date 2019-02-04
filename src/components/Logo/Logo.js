import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <a href={window.location.href}>
            <img src={burgerLogo} alt="myBurger"/>
            </a>
    </div>
);

export default logo;
