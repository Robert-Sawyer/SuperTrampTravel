import React from 'react';
import classes from './SocialMediaBar.module.css';
import facebookIcon from '../../../assets/images/facebook.png';
import instagramIcon from '../../../assets/images/instagram.png';

const socialMediaBar = (props) => (
    <div className={classes.SocialMedia}>
        <a href="http://facebook.com">
            <img src={facebookIcon} alt='Facebook' style={{borderRadius: '50%'}}/>
        </a>
        <a href="http://instagram.com">
            <img src={instagramIcon} alt='Instagram' style={{borderRadius: '35%'}}/>
        </a>
    </div>
);

export default socialMediaBar;