import React from 'react';
import logoImage from '../../assets/images/LostWorldLogo.gif';
import classes from './Logo.css';

const logo = (props) => (
        <div className={classes.Logo}>
            <img src={logoImage} alt={'Logo'}/>
        </div>
    );

export default logo;