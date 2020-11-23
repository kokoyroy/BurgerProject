import React from 'react';
import Item from './Item/Item';
import Styles from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={Styles.NavigationItems} >
            <Item
                active
                link={'/'}>
                Burger Builder
            </Item>
            <Item
                
                link={'/'}>
                Checkout
            </Item>


        </ul>
    );
}

export default navigationItems;