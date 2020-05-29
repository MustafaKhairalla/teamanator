import React from 'react';
import { DashboardStyle } from '../style/index';
import Employeecard from './Employeecard';
import Todo from './Todo';
import DashCalendar from './DashCalendar';
import Header from './Header';
import Events from './Events';
import { Row, Col, Container } from 'reactstrap';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Dashboard() {


    return (
        <DashboardStyle>
            <Header />
            <Sidebar />
            <div className="container-main">
                    <Container>
                        <Row>
                            <Col>
                                <Todo />
                                <br />
                                <Row>
                            <Col>
                                <Events />
                            </Col>
                        </Row>
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        
                    </Container>
                    
               
                    
               
                    
               
            </div>
            <Footer />
        </DashboardStyle >

    )
};

export default Dashboard;