import React from 'react';
import '../style/dashboard.css';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Headerside from './Headerside';
import Events from './Events';
import { Container, Row, Col } from 'reactstrap';
import Footer from "../components/Footer";

function Dashboard() {
    return (
        <div>
            <Headerside />
            <div className="container-main">
                <Row>
                    <Col>
                        <Events />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Todo />
                    </Col>
                    <Col>
                        <DashCalendar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Employeecard />
                    </Col>
                </Row>




            </div>
            <Footer />
        </div>

    )
};

export default Dashboard;