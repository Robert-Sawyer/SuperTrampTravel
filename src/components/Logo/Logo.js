import React from 'react';
import logoImage from '../../assets/images/LostWorldLogo.gif';
import classes from './Logo.module.css';

const logo = (props) => (
        <div className={classes.Logo}>
            <a href="/" style={{textDecoration: 'none', color: 'black'}}>
                <img src={logoImage} alt='Logo'/>
                <h1>LOST WORLD</h1>
            </a>
        </div>
    );

export default logo;