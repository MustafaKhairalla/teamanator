import React from 'react';
import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Dashboard() {
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


                    <Col>
                        <Employeecard />
                    </Col>
                </Row>






            </div>
            <Footer />
        </DashboardStyle >

    )
};

export default Dashboard;