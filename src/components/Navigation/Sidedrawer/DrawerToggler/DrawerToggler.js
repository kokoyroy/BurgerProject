import { checkPropTypes } from 'prop-types';
import React from 'react';
import Styles from './DrawerToggler.module.css';

const drawerToggler = (props) => (
    <div className={Styles.Toggler} onClick={props.open}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggler;