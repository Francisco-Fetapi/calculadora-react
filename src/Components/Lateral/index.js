import React from 'react'
import './Lateral.css';

function Lateral({ativo,cantoInicial,children}) {

    let classe = '';
    if(ativo){ //se nao estiver ativo!
        classe = 'ativo';
    }

    let style = {transform:'translate(100%)'}
    if(cantoInicial === 'E'){
        style = {transform:'translate(-100%)'}
    }

    return (
        <div className={`lateral ${classe}`} style={style}>
            {children}
        </div>
    )
}

export default Lateral
