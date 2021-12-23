import React, { useState } from 'react'
import './Main.css';
import Quadro from './Quadro';
import Teclas from './Teclas';

function Main({guardarNoHistorico}) {

    const [entrada,setEntrada] = useState('0');
    const [saida,setSaida] = useState('0');
    

    const teclas = ["<span style='font-size:12px;' class='glyphicon glyphicon-arrow-up'></span>",'CE','C',"&larr;","/","&pi;","7","8","9","x","n!","4","5","6","-","+-","1","2","3","+","(",")","0",",","="];
    const sinais = ['+','=','-','/','x'];
    const simbolos = [...sinais,',']

    function escrever(tecla){
        setEntrada(teclaAt=>{
            return teclaAt+tecla;
        })
    }
    function terminaComSinal(){
        return simbolos.some(sinal=>entrada.endsWith(sinal))
    }

    function acaoTecla(tecla){
        if(tecla === "C") setEntrada('0');
        if(tecla === "&larr;"){
            setEntrada(()=>{
                return entrada.substring(0,entrada.length-1);
            })
            
        }
        if(tecla === '&pi;') escrever(Math.PI);
        if(tecla === "CE") setSaida('0');
        if(tecla === "="){
            calcular(entrada);
            guardarNoHistorico(entrada,calcular(entrada));
        }
        if((simbolos.includes(tecla) && tecla !== '=') || !isNaN(tecla) || tecla === "(" || tecla === ")"){
            if(entrada === '0') setEntrada('');
            if(simbolos.includes(tecla)){
                if(terminaComSinal()){
                    const novo = entrada.substring(0,entrada.length-1)+tecla;
                    setEntrada(novo);
                }else{
                    escrever(tecla);
                }
            }else{
                escrever(tecla);
            }
        }
        console.log(tecla);
    }

    function calcular(exp){
        try{
            if(entrada){
                exp = exp.replace(/x/g,'*');
                exp = exp.replace(/,/g,'.');
                const res = eval(exp);
                setSaida(res);
                return res;
            }
        }catch(e){
            window.alert("Ocorreu algum erro");
        }
    }


    return (
        <main>
            <Quadro entrada={entrada} saida={saida}/>
            <Teclas teclas={teclas} sinais={sinais} acaoTecla={acaoTecla}/>
        </main>
    )
}

export default Main
