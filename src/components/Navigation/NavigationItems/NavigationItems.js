import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/login">ZALOGUJ</NavigationItem>
            <NavigationItem link="/register">ZAREJESTRUJ</NavigationItem>
        </ul>
    );

export default navigationItems;