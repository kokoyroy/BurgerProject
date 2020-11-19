import React from 'react';
import styles from './BuildControls.module.css';
import Control from './Control/Control';



const buildControls = props => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ]

    return (
        <div className={styles.BuildControls}>
            {controls.map(el => (
                <Control 
                label={el.label}
                key={el.label}
                add={()=>{props.add(el.type)}} />
            ))}
        </div>
    )
}

export default buildControls;