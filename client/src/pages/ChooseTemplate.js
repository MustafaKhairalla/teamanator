import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BusinessCard from "../components/BusinessCard";
import SportCard from "../components/SportCard";
import EducationCard from "../components/EducationCard";
import FitnessCard from "../components/FitnessCard";

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardDeck } from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';
import TemplateCard from '../components/TemplateCard';



const ChooseTemplate = () => {

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


    return (
        <Container >
            <br></br>
            <Row>
                <Col md={3}>
                    <h1>Step 1</h1>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={7}>
                    <h2>Chose your template</h2>
                </Col>
            </Row>
            <br></br>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <div>
                        <CardDeck>
                            <ReactCardFlip isFlipped={flipping.isFlipped} flipDirection="horizontal">
                                <BusinessCard
                                    title="Business"
                                    handleShow={handleShow}
                                    handleClick={handleClick}
                                />

                                <BusinessCard
                                    handleClick={handleClick} />

                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping2.isFlipped} flipDirection="horizontal">
                                <SportCard
                                    title
                                    handleClick={handleClick2} handleShow={handleShow} />
                                <SportCard handleClick={handleClick2} />
                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping3.isFlipped} flipDirection="horizontal">
                                <EducationCard handleClick={handleClick3} />
                                <EducationCard handleClick={handleClick3} />
                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping4.isFlipped} flipDirection="horizontal">
                                <FitnessCard handleClick={handleClick4} />
                                <FitnessCard handleClick={handleClick4} />
                            </ReactCardFlip>

                            <Modal aria-labelledby="contained-modal-title-vcenter"
                                centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="ui yellow">You chosse a Business Team template!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container>
                                        <Row >
                                            <Col md={4}>
                                                <span >
                                                    <img style={{ width: '18rem' }} src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589488079/three-white-ceramic-pots-with-green-leaf-plants-near-open-796602_u470d7.jpg" alt="business" />

                                                </span>
                                            </Col>
                                            <Col md={8}>
                                                <h6 > Location: </h6>
                                                {/* <h6 > Email: {employee.email}</h6> */}
                                                <h6 > Mobile: </h6>
                                                <h6 > Department:</h6>
                                                <h6 > Salary:  $</h6>
                                                <h6 > Title: </h6>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Container>
                                        {/* <div className="alert alert-danger mr-2 ml-2" role="alert"
                                        // style={{ opacity: firedMatch ? 1 : 0 }}
                                        >
                                            This employee has been fired
                        </div> */}
                                    </Container>
                                    <Button className="ui inverted red button" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button className="ui inverted green button" variant="danger">
                                        <Link to="/member">
                                            Continue to Step 2
                                        </Link>
                                    </Button>

                                </Modal.Footer>
                            </Modal>

                        </CardDeck>
                    </div>

                </Col>

            </Row>

        </Container>
    )
}

export default ChooseTemplate;