import React from 'react';
import Mox from '../../../hoc/mox';
import Button from '../../Ui/Button/Button';


const ordersummary = (props) => {
    const ingsummary = Object.keys(props.order).map((el) => {
        let name = el.charAt(0).toUpperCase() + el.slice(1);
        return <li key={el} >{name} : {props.order[el]}</li>
    })
    return (
        <Mox>
            <h3>Your order!</h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>
                {ingsummary}
            </ul>
            <h3>Total {props.total}euro</h3>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancelOrder} btnType={'Danger'} >CANCEL</Button>
            <Button clicked={props.continue} btnType={'Success'} >CHECKOUT</Button>
        </Mox>
    )


}

export default ordersummary;