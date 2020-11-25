import React from 'react';
import Styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../Sidedrawer/DrawerToggler/DrawerToggler';

const toolbar = (props) => {
    return (
        // onClick ={props.open} 
        <header className={Styles.Toolbar} >
            <DrawerToggler  open ={props.open} />
            <div className={Styles.Logo} >
                <Logo />
            </div>
            <nav className={Styles.DesktopOnly} >
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;