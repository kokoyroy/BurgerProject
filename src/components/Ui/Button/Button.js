import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
    //debug code
    // console.log('to style einai ' + typeof styles);
    // console.log(`kai periexei `,`${styles}`);
    // console.log(styles);
    return (

        <button
            className={[styles.Button, styles[props.btnType]].join(' ')}
            onClick={props.clicked} >
            {props.children}
        </button>
    )
}

export default button;