/* LIBRAIRIES */
import React from 'react';

/* CSS */
import './Modal.css';

const Modal = (props) => {

    return (
        <>
            {
                props.open ? (
            
                <div className='overlay' onClick={() => props.setOpen(false) }>
                    <div className='modal'>
                        <h1 className='txt'>{props.title}</h1>
                        <h2 className='txt'>{props.body}</h2>
                    </div>
                </div>)
                :
                <></>
            }
        </>
    )
};

export default Modal;
