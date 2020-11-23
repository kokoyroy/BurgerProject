import React from 'react';
import Styles from './Item.module.css';

const item = (props) => (
    <li className={Styles.Item} >
        <a
            href={props.link}
            className={props.active ? Styles.active : null}  >
            {props.children}
        </a>
    </li>
)

export default item;