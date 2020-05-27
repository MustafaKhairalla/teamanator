import React from 'react';
import { HeaderStyle } from '../style/index.js';

function Header() {
    return (
        <HeaderStyle>
        <nav className="header-main">
            <h1>Teamanator</h1>
            <img src="./logo.png" alt="logo" />
        </nav>
        </HeaderStyle>
        
    )
};

export default Header;