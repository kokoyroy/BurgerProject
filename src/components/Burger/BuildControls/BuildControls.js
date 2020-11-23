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
            <p>Price :  <strong>{props.price}</strong></p>
            {controls.map(el => (
                <Control 
                disabled ={props.disabled[el.type]}
                label={el.label}
                key={el.label}
                type = {el.type}
                add={props.add}
                remove={props.remove}
                 />
            ))}
            <button disabled={!props.purchasable}
             className={styles.OrderButton}
             onClick={props.ordered}
             >ORDER NOW</button>
        </div>
    )
}

export default buildControls;