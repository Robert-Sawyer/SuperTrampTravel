import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const toolbar = (props) => (

        <header className={classes.Toolbar}>
            <Logo height='80%'/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
            {/*<div style={{marginTop: '66px'}}>*/}
            {/*    <HeaderMenu/>*/}
            {/*</div>*/}
        </header>
);

export default toolbar;