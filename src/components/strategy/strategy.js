import React from 'react';
import SideDrawer from '../ui/sideDrawer/sideDrawer';

const strategy = (props) => {
    return (
        <SideDrawer show={props.show} sideDrawerClosed={props.sideDrawerClosed}>
            <p>Strategy Works</p>
        </SideDrawer>
    );
};

export default strategy;