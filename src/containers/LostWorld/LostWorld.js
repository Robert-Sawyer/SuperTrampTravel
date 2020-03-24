import React, {Component} from 'react';
import classes from './LostWorld.module.css';
import backgroundImage from '../../assets/images/background.jpg';

class LostWorld extends Component {
    render() {
        return (
            <div className={classes.LostWorld}>
                <img src={backgroundImage} alt='landscape'/>
            </div>
        );
    }
}

export default LostWorld;