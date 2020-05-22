import React from 'react';

import {HeaderStyle} from "../style/index.js";
import {Navbar} from "reactstrap";

function Header() {
    return (
        <HeaderStyle>
            <div>
            {/* <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
                </nav> */}
                <Navbar>
                    <img src = {`${process.env.PUBLIC_URL}no-outline-01.png`} width ="100%"alt="Temp icon"></img>
                </Navbar>
            </div>
        </HeaderStyle>
  
        
    )
};

export default Header;