import React, { useState } from 'react';
import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Row, Col } from 'reactstrap';
import Footer from './Footer';
import Sidebar from './Sidebar';

import CardHolder from "./CardHolder";
import NewEmployeeCard from "./NewEmployeeCard";


function Dashboard() {

    const users = [
        {
            id: 1,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        },
        {
            id: 2,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        },
        {
            id: 3,
            name: "SpongeBob",
            title: "Fry Cook",
            location: "A Pineapple Under the Sea"
        }
    ]

    // const [users, setUsers] = useState([{

    // }])
    return (
        <DashboardStyle>
            <Header />
            <Sidebar />
            <div className="container-main">

                <Row>
                    <Col>
                        <Todo />
                    </Col>
                    <Col>
                        <DashCalendar />
                        <Row>
                            <Col>
                                <Events />
                            </Col>
                        </Row>
                    </Col>


                    <Col style={{ backgroundColor: "#3f3f3f", margin: "20px" }}>
                        <CardHolder>
                            {users.map(e => (
                                <NewEmployeeCard
                                    key={e.id}
                                    name={e.name}
                                    title={e.title}
                                    location={e.location}

                                />
                            ))}
                            {/* <Employeecard /> */}
                        </CardHolder>

                    </Col>
                </Row>
            </div>
            <Footer />
        </DashboardStyle >

    )
};

export default Dashboard;