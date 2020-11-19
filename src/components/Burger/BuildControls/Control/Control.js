import React from 'react';
import styles from './Control.module.css';



const control = props =>{
return(    
<div className={styles.Control}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More} onClick={props.add}>More</button>
</div>
)

}

export default control;
