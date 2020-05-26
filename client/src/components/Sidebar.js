import React from 'react';
import { Button } from 'reactstrap';
import '../style/Header.css';

function Sidebar() {
    return (
        <section id="slide-out">
            <ul id="side-content">
                <h5 id="dashboardTitle"className="text-center">My Dashboard</h5>
                <img id="profile-img" src="https://getuikit.com/docs/images/avatar.jpg" alt="profile" />
                <hr />
                <h5>Welcome, </h5>
                <br />
                <Button color="secondary" size="sm" block>Add New Employee</Button>
                <Button color="secondary" size="sm" block>Remove Employee</Button>
                <Button color="secondary" size="sm" block>Another Button</Button>
                <Button color="danger" size="sm" block>Sign Out</Button>
        </ul>
        </section>
    )
};

export default Sidebar;