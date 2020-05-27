import React from 'react';
import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Container, Row, Col } from 'reactstrap';
<<<<<<< HEAD
import Footer from "../components/Footer";
=======
import Footer from './Footer';
import Sidebar from './Sidebar';
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803

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
<<<<<<< HEAD
                        <DashCalendar />
=======
                    <DashCalendar />
                    <Row>
                        <Col>
                            <Events />
                        </Col>
                    </Row>
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803
                    </Col>
                    
                    
                    <Col>
                        <Employeecard />
                    </Col>
                </Row>
<<<<<<< HEAD




=======
                
                
                
                
                
                
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803
            </div>
            <Footer />
        </DashboardStyle>

    )
};

export default Dashboard;