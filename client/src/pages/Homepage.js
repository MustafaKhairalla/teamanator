import React, { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Row, Col } from "reactstrap";
import ReactCardFlip from 'react-card-flip';
import ExampleCard from "../components/ExampleCard";
import ExampleCardBack from "../components/ExampleCardBack";
import { Link, useLocation } from "react-router-dom";
import { HeaderStyleHome, HomeStyle } from "../style";
import { Button } from 'semantic-ui-react'


function Homepage() {
    //HANDLE FLIPPING
    const [flipping, setFlipping] = useState({
        isFlipped: false
    });

    const handleClick = (e) => {
        e.preventDefault();
        setFlipping(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    return (
        <div className="App">
            <HeaderStyleHome>
                <div className="HeaderNav" >
                    <img bottom width="300px" src={`${process.env.PUBLIC_URL}/images/no-outline-01.png`} alt="TeamanatorLogo" style={{ margin: "1em" }} />
                    <Button class="ui button" color="blue" ><Link to="/login">log-in</Link></Button>
                </div>
            </HeaderStyleHome>
            <HomeStyle>
                <Row className="topRow">
                    <Col md={3} className="homeleftColumn">
                        <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/Info1.png`} alt="Temp icon" style={{ margin: "3em" }} />
                        <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/Info2.png`} alt="Temp icon" style={{ margin: "3em" }} />
                        <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/Info3.png`} alt="Temp icon" style={{ margin: "3em" }} />
                        <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/Info4.png`} alt="Temp icon" style={{ margin: "3em" }} />
                    </Col>
                    <Col md={9} className="HeadlineAndCard">
                        <Row>
                            <Col md={9}>
                                <div class="card headerCard" Height="230px">
                                    <h1 className="display-3">Teamanator</h1>
                                    <br></br>
                                    <h4 >Teamanator is THE solution for all your team management needs.</h4>
                                    <h4>What?! All my needs are met with this one app?! </h4>
                                    <h4>Good point, maybe not <em>ALL</em> your needs but it is a darn good app! </h4>
                                    <br></br>
                                    <Button class="ui inverted primary button registerbtn" color="blue"><Link to="/register">Create an Account</Link></Button>
                                    <br></br>
                                    <Button class="ui Primary button" color="blue"><Link to="/login">log-in</Link></Button>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div>
                                    <ReactCardFlip isFlipped={flipping.isFlipped} flipDirection="horizontal">
                                        <ExampleCard handleClick={handleClick} />
                                        <ExampleCardBack handleClick={handleClick} />
                                    </ReactCardFlip>
                                </div>
                            </Col>

                        </Row>
                        <div className="benfitIcons">
                            <Row>
                                <Col md={7}>
                                    <h2>Do you need to organize all the tiny monsters on your son's soccer team?
                                    Do you have multiple Clients that you need to track?
                                    What about all those pesky employees to keep track of?
                                    Well now you can choose the right template for your team.
                                                Because each team is different right? </h2>
                                </Col>
                                <Col md={4}>
                                    <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/IconA.png`} alt="Temp icon" />
                                </Col>
                            </Row>
                        </div>
                        <div className="benfitIcons2">
                            <Row>
                                <Col md={4}>
                                    <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/IconB.png`} alt="Temp icon" />
                                </Col>
                                <Col md={8}>
                                    <div className="management">
                                        <h2>Management extends beyond just knowing who is on your team.
                                        Also being able to track important dates and to do items critical to your success
                                        (at least that’s what we have heard). Fear not we have built in these handy features
                                                for you! </h2>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="benfitIcons">
                            <Row>
                                <Col md={8}>
                                    <h2>Custom!! Add all your own customizations! Do you need pictures for all your team members, add away.
                                                Need a very specific template? Use our custom team member builder (coming soon). </h2>
                                </Col>
                                <Col md={4}>
                                    <img bottom width="65%" src={`${process.env.PUBLIC_URL}/images/IconC.png`} alt="Temp icon" />
                                </Col>
                            </Row>
                        </div>
                        <div className="createAccount">
                            <Row>
                                <Button color="secondary" size="lg" block>
                                    <Link to="/login">Create an Account</Link>
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </HomeStyle>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )

}


export default Homepage;