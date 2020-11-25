import React from 'react';
import Styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Ui/Backdrop/Backdrop';
import Mox from '../../../hoc/mox';


const sideDrawer = (props) => {
 let attachedClasses = [Styles.SideDrawer,Styles.Close]
 if(props.show){
    attachedClasses = [Styles.SideDrawer,Styles.Open]
 }


    return (
        <Mox>
            <Backdrop
             show ={props.show}
             cancel={props.close}   />
            <div className={attachedClasses.join(' ')} >
                <div className={Styles.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Mox>
    )
}


export default sideDrawer;