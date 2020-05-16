import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import {Container,Row, Col, Jumbotron, Button, Card, CardTitle, CardText} from "reactstrap";
import { Link } from "react-router-dom";

function Homepage () {
    return(
        <div className= "App">
             <Navbar></Navbar>
                     <Row>
                        <Col md={9}>
                            <Jumbotron fluid>
                                <Container fluid>
                                <h1 className="display-3">Teamanator</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                                    nisi ut aliquip ex ea commodo consequat.</p>
                                <Button>
                                <Link to="/template">
                                    Create an Account
                                    </Link></Button>
                                </Container>
                            </Jumbotron>
                        </Col>
                        <Col md={3}>
                                 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardTitle><h3>Features</h3> </CardTitle>
                                    <CardText>
                                        <ul>
                                            <li>Customize the data for your team </li>
                                            <li>Track important events </li>
                                            <li>Add or subtract team members </li>
                                            <li>And so much more…</li>
                                        </ul>
                                    </CardText>                                  
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit.
                      
                         </h1>
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md= {8}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.</p>
                                        
                                </Col>
                                <Col md= {4}>
                                    <img bottom width = "75%" src = {`${process.env.PUBLIC_URL}IconA.png`} alt="Temp icon" />
                                </Col>
                            </Row>
                            <Row>
                            <Col md= {4}>
                                    <img bottom width = "75%" src = {`${process.env.PUBLIC_URL}IconA.png`} alt="Temp icon" />
                                </Col>
                            <Col md= {8}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.</p>
                                        
                                </Col>
                            </Row>
                            <Row>
                            <Col md= {8}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                        deserunt mollit anim id est laborum.</p>
                                        
                                </Col>
                                <Col md= {4}>
                                    <img bottom width = "75%" src = {`${process.env.PUBLIC_URL}IconA.png`} alt="Temp icon" />
                                </Col>
                            </Row>
                            <Row><Button color="secondary" size="lg" block>Create an Account </Button></Row>
                            <Row>
                            <video style={{ margin:15 }} id="background-video" loop autoPlay>
                                <source src={`${process.env.PUBLIC_URL}BackgroundVideo.mp4`} type="video/mp4" width = "100%"/>
                                
                                Your browser does not support the video tag.
                            </video>
                            </Row>
                        </Col>
                    </Row>
                <Footer></Footer>    
        </div>   
    )

}


export default Homepage;