import React from 'react';
import Mox from '../../../hoc/mox';
import Backdrop from '../Backdrop/Backdrop';
import Styles from './Modal.module.css';

const modal = (props) => {
    return (
        <Mox>
        <Backdrop 
        cancel ={props.cancelOrder}
        show={props.modalShow} />
        <div className={Styles.Modal}
            style={{
                transform: props.modalShow ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.modalShow ? '1' : '0'
            }}
        >
            {props.children}
        </div>
        </Mox>
    )
}

export default modal;