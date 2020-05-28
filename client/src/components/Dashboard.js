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

    // This is an example employee.

        let employee = [
            {
                name: "Jake Petersen",
                title: "Service Advisor",
                salary: "$60,000",
                department: "Service",
                phone: "951-227-6991",
                email: "j@yahoo.com",
                address: "Denver, CO"
            },
            {
                name: "John Doe",
                title: "Sales Advisor",
                salary: "$50,000",
                department: "Sales",
                phone: "951-227-6991",
                email: "jd@yahoo.com",
                address: "Littleton, CO"
            }
        ]
    return (
        <DashboardStyle>
            <Header />
            <Sidebar />
            <div className="container-main">
                    <Row>
                        <Col>
                            <Todo />
            
                            <DashCalendar />
                        </Col>
                        <Col>
                            <Employeecard employees = {employee}/>
                        </Col>
                    </Row>
                    <div className="container">
                        <Row>
                            <Col>
                                <Events />
                            </Col>
                        </Row>
                    </div>
                    
               
                    
               
                    
               
            </div>
            <Footer />
        </DashboardStyle >

    )
};

export default Dashboard;