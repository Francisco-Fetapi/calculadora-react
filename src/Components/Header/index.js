import React from 'react'
import './Header.css';

function Header({setHistorico,setSobre}) {
    return (
        <header>
            <div className="d-flex">
                <span className="glyphicon glyphicon-menu-hamburger" onClick={setSobre}></span>
                <span>Calculadora React</span>
            </div>
            <div className="glyphicon glyphicon-time" onClick={setHistorico}></div>
        </header>
    )
}

export default Header
