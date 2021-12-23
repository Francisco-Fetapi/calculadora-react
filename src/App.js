import React, { useState } from 'react';
import Cabecalho from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Lateral from './Components/Lateral';
import Historico from './Components/Historico';
import Sobre from './Components/Sobre';

function App(){

  const [historico,setHistorico] = useState(false);
  const [history,setHistory] = useState(obterHistorico());
  const [sobre,setSobre] = useState(false);

    function controleHistorico(){
      if(sobre) setSobre(false);
      setHistorico(!historico);
    }
    function controleSobre(){
      if(historico) setHistorico(false);
      setSobre(!sobre);
    }
    function guardarNoHistorico(ent,res){
      const his = obterHistorico();
      his.push({entrada:ent,saida:res});
      localStorage.setItem('historico',JSON.stringify(his));
      setHistory(his);
      console.log(obterHistorico());
    }
    function atualizarHistorico(novoHis){
      setHistory(novoHis);
      localStorage.setItem('historico',JSON.stringify(novoHis));
    }
    function obterHistorico(){
        return JSON.parse(localStorage.getItem('historico')) || []
    }
    function apagarDoHistorico(ind){
      const novoHistory = history.filter((dados,k)=>k != ind)
      atualizarHistorico(novoHistory);
    }

  return(
    <div className="App">
      <Cabecalho setHistorico={controleHistorico} setSobre={controleSobre}/>
      
      <Main guardarNoHistorico={guardarNoHistorico}/>
      
      <Lateral cantoInicial="D" ativo={historico}>
          <Historico historico={history} apagarDoHistorico={apagarDoHistorico} atualizarHistorico={atualizarHistorico}/>
      </Lateral>

      <Lateral cantoInicial="E" ativo={sobre}>
        <Sobre />
      </Lateral>
	</div>
    )
}
export default App;
