import React, {useState} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Container,Row, Col, Jumbotron, Button, Card} from "reactstrap";
import ReactCardFlip from 'react-card-flip';
import ExampleCard from "../components/ExampleCard";
import { Link, useLocation } from "react-router-dom";


function Homepage () {
    //HANDLE FLIPPING
    const [flipping, setFlipping] = useState({
        isFlipped: false
    });

    const handleClick = (e) => {
        e.preventDefault();
        setFlipping(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    return(
        <div className= "App">
             <Header> <Header/>     
                 </Header>
                   <Row>
                        <Col md={3} style ={{backgroundColor: "#9C9C9C"}}>
                          
                                <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/Info1.png`} alt="Temp icon" style ={{margin: "3em"}} />
                                <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/Info2.png`} alt="Temp icon" style ={{margin: "3em"}} />
                                <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/Info3.png`} alt="Temp icon" style ={{margin: "3em"}}/>       
                        </Col>
                        <Col md={9}>
                            <Jumbotron fluid>
                                    <Container fluid>
                                    <h1 className="display-3">Teamanator</h1>
                                    <h4 className="lead">Teamanator is THE solution for all your team management needs. 
                                                        What! All my needs are met with this one app! 
                                                        Good point, maybe not all your needs but it is a darn good app! 
                                                        </h4>
                                    <Button><Link to="/login">Create an Account</Link></Button>
                                    <Button style={{margin: "1em", color: "white"}}><Link to="/login">Log-in</Link></Button>
                                </Container>
                                    <div>
                                    <ReactCardFlip isFlipped={flipping.isFlipped} flipDirection="horizontal">
                                        <ExampleCard handleClick={handleClick} /> 
                                        <ExampleCard handleClick={handleClick} />
                                    </ReactCardFlip>
                                    </div>  
                            </Jumbotron>    
                        <Row>
                            <Col md= {8}>
                                <h5>Do you need to organize all the tiny monsters on your son's soccer team? 
                                    Do you have multiple Clients that you need to track? 
                                    What about all those pesky employees to keep track of?  
                                    Well now you can choose the right template for your team.
                                        Because each team is different right? </h5>
                                </Col>
                                    <Col md= {4}>
                                        <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/IconA.png`} alt="Temp icon" />
                                    </Col>
                                </Row>
                                <Row>
                                <Col md= {4}>
                                        <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/IconB.png`} alt="Temp icon" />
                                    </Col>
                                <Col md= {8}>
                                        <h5>Management extends beyond just knowing who is on your team. 
                                        Also being able to track important dates and to do items critical to your success 
                                        (at least that’s what we have heard). Fear not we have built in these handy features 
                                        for you! </h5>
                                            
                                    </Col>
                                </Row>
                                <Row>
                                <Col md= {8}>
                                        <h5>Custom!! Add all your own customizations! Do you need pictures for all your team members, add away. 
                                            Need a very specific template? Use our custom team member builder (coming soon). </h5>   
                                    </Col>
                                    <Col md= {4}>
                                        <img bottom width = "65%" src = {`${process.env.PUBLIC_URL}/images/IconC.png`} alt="Temp icon" />
                                    </Col>
                                </Row>
                                <Row><Button color="secondary" size="lg" block><Link to="/login">Create an Account</Link></Button> </Row>
                                <Row>
                                {/* <video style={{ margin:15 }} id="background-video" loop autoPlay>
                                    <source src={`${process.env.PUBLIC_URL}BackgroundVideo.mp4`} type="video/mp4" width = "100%"/>
                                    
                                    Your browser does not support the video tag.
                                </video> */}
                                </Row>
                                </Col>
                                </Row>
                <Footer />     
            </div>  
    )

}


export default Homepage;