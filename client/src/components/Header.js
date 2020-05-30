import React from 'react';
import { HeaderStyle } from '../style/index.js';

function Header() {
    return (
        <HeaderStyle>
        <nav className="header-main">
            <img bottom width = "18%" src = {`${process.env.PUBLIC_URL}/images/no-outline-01.png`} alt="TeamanatorLogo" style ={{margin: "1em"}} />
        </nav>
        </HeaderStyle>
        
    )
};

export default Header;