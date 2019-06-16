import React from 'react';
import './sideDrawer.css';
import Backdrop from '../backdrop/backdrop';

const sideDrawer = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.sideDrawerClosed}/>
            <div 
                className="SideDrawer"
                style={{
                    transform : props.show ? 'translateY(0)' : 'translateX(-100vh)',
                    opacity: props.show ? '1' : '0',                    
                }}
                >
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default sideDrawer;