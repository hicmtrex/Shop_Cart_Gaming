import React from 'react';
import './Output.css'
const Output = ({text,result}) => {
    return (
        <div class="output">
         <div data-previous-oprand class="previous-operand">{text}</div>
         <div data-current-oprand class="current-operand">{result}</div>
    </div>
    );
}

export default Output;
