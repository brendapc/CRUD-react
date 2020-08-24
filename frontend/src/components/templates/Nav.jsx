import React from 'react'
import './Nav.css'


export default props =>
    <nav className="nav">
        <nav className="menu">
            <a href="/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="/">
                <i className="fa fa-users"></i> Usuários   
            </a>
        </nav>
    </nav>
