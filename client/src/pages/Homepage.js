import React, {useState} from "react";
import Navbar from "../components/Navbar";
import {Container,Row, Col, Jumbotron, Button, Card} from "reactstrap";
import ReactCardFlip from 'react-card-flip';
import Header from '../components/Header';
import ExampleCard from "../components/ExampleCard";
import EducationCard from "../components/EducationCard";
import BusinessCard from "../components/BusinessCard";
import SportCard from "../components/SportCard";
import { Link, useLocation } from "react-router-dom";



function Homepage () {
    //HANDLE FLIPPING
    const [flipping, setFlipping] = useState({
        isFlipped: false
    });
    const [flipping2, setFlipping2] = useState({
        isFlipped: false
    });
    const [flipping3, setFlipping3] = useState({
        isFlipped: false
    });
    const [flipping4, setFlipping4] = useState({
        isFlipped: false
    });
    // const [handleClicks, setHandleClicks] = useState({
    //     one: false, two: false, three: false, four: false
    // })

    //HANDLE SHOW MODEL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (e) => {
        e.preventDefault();
        setFlipping(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    const handleClick2 = (e) => {
        e.preventDefault();
        setFlipping2(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    const handleClick3 = (e) => {
        e.preventDefault();
        setFlipping3(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    const handleClick4 = (e) => {
        e.preventDefault();
        setFlipping4(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    return(
        <div>
            <Header />
        <div className= "App">
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
                                <Link to="/login">Create an Account</Link></Button>
                                </Container>
                            </Jumbotron>
                        </Col>
                        <Col md={3}>
                                <ReactCardFlip isFlipped={flipping.isFlipped} flipDirection="horizontal">
                                    <ExampleCard
                                        title="Example"
                                        handleShow={handleShow}
                                        handleClick={handleClick}
                                    />
                                    <ExampleCard
                                        handleClick={handleClick} />
                                </ReactCardFlip>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                        <Card body inverse style={{ backgroundColor: '#3d40da', borderColor: '#333' }}>
                                <div style={{ margin: '1em'}}>
                                <ReactCardFlip isFlipped={flipping2.isFlipped} flipDirection="horizontal">
                                        <BusinessCard
                                            title="Example"
                                            handleShow={handleShow}
                                            handleClick={handleClick2}
                                        />
                                        <BusinessCard
                                            handleClick={handleClick2} />
                                    </ReactCardFlip>
                                </div>
                                <div style={{ margin: '1em'}}>
                                <ReactCardFlip isFlipped={flipping3.isFlipped} flipDirection="horizontal">
                                        <SportCard
                                            title="Example"
                                            handleShow={handleShow}
                                            handleClick={handleClick3}
                                        />
                                        <SportCard
                                            handleClick={handleClick3} />
                                    </ReactCardFlip>
                                </div>
                                <div style={{ margin: '1em'}}>
                                <ReactCardFlip isFlipped={flipping4.isFlipped} flipDirection="horizontal">
                                        <EducationCard
                                            title="Example"
                                            handleShow={handleShow}
                                            handleClick={handleClick4}
                                        />
                                        <EducationCard
                                            handleClick={handleClick4} />
                                    </ReactCardFlip>
                                </div>
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
                            {/* <video style={{ margin:15 }} id="background-video" loop autoPlay>
                                <source src={`${process.env.PUBLIC_URL}BackgroundVideo.mp4`} type="video/mp4" width = "100%"/>
                                
                                Your browser does not support the video tag.
                            </video> */}
                            </Row>
                        </Col>
                    </Row>  
            </div>
        </div>   
    )

}


export default Homepage;