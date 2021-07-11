import React from 'react';
import './Button.css'

const Button = ({num,styleName,addText}) => {
    return (
        <button onClick={() => addText(num)} className={styleName} >{num}</button>
    );
}

export default Button;
