import React from 'react';
import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Container, Row, Col } from 'reactstrap';
<<<<<<< HEAD
//import Footer from './Footer';
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
<<<<<<< HEAD
    
        </div>
=======
            <Footer />
        </DashboardStyle>
>>>>>>> ec12e6a5756008117602b3b891d661a1277ec803

    )
};

export default Dashboard;