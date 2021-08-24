import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

import classes from './Modal.module.css'

 function Backdrop({hideCartHandler}) {
     return <div className={classes.backdrop} onClick={hideCartHandler}/>
}

 function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
       <div className={classes.content}>{props.children}</div>
       </div>
    )
}

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
    return (
        <Fragment>
         {ReactDom.createPortal(<Backdrop hideCartHandler={props.hideCartHandler} />,portalElement)}  
 {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}
