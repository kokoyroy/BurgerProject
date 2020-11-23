import React from 'react';
import styles from './Layout.module.css'
import Mox from '../../hoc/mox';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => {

    return (
        <Mox>
            <Toolbar/>
            {/* <div>Toolbar , Sidebar , Backdrop</div> */}
            <main className={styles.content}>
                {props.children}
            </main>
        </Mox>
    )

}


export default layout;