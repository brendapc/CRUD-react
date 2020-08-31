import React from 'react'
import './Nav.css'

import NavIcon from './NavIcon'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavIcon icon='home' title='Home'/ >
            <NavIcon icon='users' title='Users' / >
        </nav>
    </aside>
