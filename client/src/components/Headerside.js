import React from 'react';
import '../style/Header.css';
import { Button } from 'reactstrap';

function Headerside() {
    return (
        <div>
        <nav>
            <div className="container">
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-medium"><i class="material-icons">menu</i></a>
                {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul> */}
                <h1 className="center">Teamanator</h1>
            </div>
        </nav>
        <ul id="slide-out" className="sidenav sidenav-fixed invisible-top">
            <div id="sidenav-container" className="container">
                <h3>My Dashboard</h3>
                <img src="https://getuikit.com/docs/images/avatar.jpg" alt="profile" />
                <hr />
                <h5>Welcome, -insert name here - </h5>
                <br />
                <Button color="secondary" size="sm" block>Add New Employee</Button>
                <Button color="secondary" size="sm" block>Another Button</Button>
                <Button color="secondary" size="sm" block>Another Button</Button>
                <Button color="danger" size="sm" block>Sign OUt</Button>
            </div>
        </ul>
        </div>
        
    )
};

export default Headerside;