import React from 'react';
import '../style/Header.css';
import { Button } from 'reactstrap';
// import 'materialize-css/dist/css/materialize.min.css';

function Headerside() {
    return (
        <div>
        <nav className="header1">
            <img src="./logo.png" alt="logo"/>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-medium"><i className="material-icons">menu</i></a>
        </nav>
        <ul id="slide-out" className="sidenav sidenav-fixed invisible-top">
            <div id="sidenav-container" className="container">
                <h5 id="dashboardTitle"className="text-center">My Dashboard</h5>
                <img id="profile-img" src="https://getuikit.com/docs/images/avatar.jpg" alt="profile" />
                <hr />
                <h5>Welcome, </h5>
                <br />
                <Button color="secondary" size="sm" block>Add New Employee</Button>
                <Button color="secondary" size="sm" block>Remove Employee</Button>
                <Button color="secondary" size="sm" block>Another Button</Button>
                <Button color="danger" size="sm" block>Sign OUt</Button>
            </div>
        </ul>
        </div>
        
    )
};

export default Headerside;