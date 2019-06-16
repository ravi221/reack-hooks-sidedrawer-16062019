import React, { useState } from 'react';
import SideDrawer from '../ui/sideDrawer/sideDrawer';

const program = (props) => {
    const [count, setCount] = useState(false);
    return (
        <SideDrawer show={props.show} sideDrawerClosed={props.sideDrawerClosed}>
            <p>Program Works</p>
        </SideDrawer>
    );
}

export default program;