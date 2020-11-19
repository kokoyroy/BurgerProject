import React from 'react';
import styles from './Layout.module.css'
import Mox from '../../hoc/mox';

const layout = (props) => {

    return (
        <Mox>
            <div>Toolbar , Sidebar , Backdrop</div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Mox>
    )

}


export default layout;