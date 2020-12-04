import React from 'react';
import Logo from '../../assets/images/burger-logo.png';
import Styles from './Logo.module.css';



const logo = (props) => {
    return (

        <div className={Styles.Logo} >
            <img src={Logo} alt='logo'/>
        </div>


    );
}

export default logo;
