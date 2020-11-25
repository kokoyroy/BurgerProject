import React, { Component } from 'react';
import styles from './Layout.module.css'
import Mox from '../../hoc/mox';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState(()=>{return{ showSideDrawer: false }});
    }
    sideDrawerOpenHandler = () => {
        this.setState(()=>{return{ showSideDrawer: !this.state.showSideDrawer} });
    }

    render() {
        return (<Mox>
            <Toolbar open={this.sideDrawerOpenHandler} />
            <SideDrawer
                show={this.state.showSideDrawer}
                close={this.sideDrawerClosedHandler} />
            {/* <div>Toolbar , Sidebar , Backdrop</div> */}
            <main className={styles.content}>
                {this.props.children}
            </main>
        </Mox>
        )
    }

}


export default Layout;