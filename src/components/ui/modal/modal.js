import React from 'react';
import './modal.css';
import Backdrop from '../backdrop/backdrop';

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
                className="Modal"
                style={{
                    transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    backgroundColor: props.customStyle,
                    color: 'white'
                }}
                >
            {props.children}
        </div>
    </div>
    
)

export default modal;