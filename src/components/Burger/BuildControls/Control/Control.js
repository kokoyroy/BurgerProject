import React from 'react';
import styles from './Control.module.css';



const control = props => {
    return (

        <div className={styles.Control}>
            <div className={styles.Label}>{props.label}</div>
            <button disabled={props.disabled} className={styles.Less} onClick={() => { props.remove(props.type) }}>Less</button>
            <button className={styles.More} onClick={() => { props.add(props.type) }}>More</button>
        </div>
    )

}

export default control;
