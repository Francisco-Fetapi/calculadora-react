import React from 'react'
import './Historico.css';

function Historico({historico,apagarDoHistorico,atualizarHistorico}) {
    return (
        <div className="historico">
            <ul className="historico__lista">
                {historico.map((conta,k)=>{
                    return (
                        <li key={k}>
                            <span>{conta.entrada} = {conta.saida}</span>
                            <span className="glyphicon glyphicon-remove" onClick={()=>apagarDoHistorico(k)}></span>
                        </li>
                    )
                })}
            </ul>
            <div className="limpa">
                <span className="glyphicon glyphicon-trash" onClick={()=>atualizarHistorico([])}></span>
            </div>
            {historico.length === 0 && <div className="text-center">Ainda não há dados no histórico!</div>}
        </div>
    )
}

export default Historico
