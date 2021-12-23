import React from 'react';
import './Main.css';

function Quadro({entrada,saida}) {
    return (
        <div className="quadro">
            <span className="input">{entrada}</span>
            <span className="output">{saida}</span>
        </div>
    )
}

export default Quadro
