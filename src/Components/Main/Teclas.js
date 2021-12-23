import React from 'react'
import './Main.css';

function Teclas({teclas,sinais,acaoTecla}) {

    function classeDaTecla(tecla){
        let classe = '';
        if(!isNaN(tecla)){
            classe = 'numero';
        }else if(sinais.includes(tecla)){
            classe = 'sinal';
        }

        return classe;
    }

    return (
        <div className="teclas">
            {teclas.map((tecla)=>{
                let classe = classeDaTecla(tecla)
                return <div className={classe} onClick={()=>acaoTecla(tecla)} key={tecla} dangerouslySetInnerHTML={{__html:tecla}} />
            })}
        </div>
    )
}

export default Teclas
