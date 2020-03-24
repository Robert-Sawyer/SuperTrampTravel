import React from 'react';
import classes from './Footer.module.css';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';
import Copyright from './CopyrightBar/CopyrightBar';

const footer = (props) => (
    <footer className={classes.Footer}>
        <div className={classes.CenterBar}>
            <div className={classes.SocialMedia}>
                <SocialMediaBar height='80%'/>
            </div>
            <div className={classes.Copyright}>
                <Copyright/>
            </div>
        </div>
    </footer>
);

export default footer;