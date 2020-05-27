import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./page.css";

import BusinessCard from "../components/BusinessCard";
import SportCard from "../components/SportCard";
import EducationCard from "../components/EducationCard";
import FitnessCard from "../components/FitnessCard";

import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CardDeck } from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';



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

    const [template, setTemplate] = useState({
        isSelected: false,
        title: "",
        image: "",
        config: {},
        fields: [],
        users: []
    })
    //HANDLE SHOW MODEL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        console.log("target show: ")
        console.log(e)

        setTemplate({
            isSelected: true,
            title: e.title,
            image: e.image,
            config: e,//all the fields 
            users: []

        })
        setShow(true);
    }

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
        <Container>
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
                                    flipping={flipping.isFlipped}
                                    config={
                                        {
                                            title: "Business",
                                            image: "../images/EmployeeCardImage.jpg",
                                            field: ["Name",
                                                "Title",
                                                "Salary",
                                                "Department",
                                                "Phone Number",
                                                "Email",
                                                "Address/Location"
                                            ]
                                        }}


                                    handleShow={handleShow}
                                    handleClick={handleClick}
                                />

                                <BusinessCard
                                    flipping={flipping.isFlipped}
                                    title="Business"
                                    handleShow={handleShow}
                                    handleClick={handleClick}
                                />

                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping2.isFlipped} flipDirection="horizontal">
                                <SportCard

                                    flipping={flipping2.isFlipped}
                                    config={
                                        {
                                            title: "Sport",
                                            image: "../images/SportsCardImage.jpg",
                                            field: [
                                                "Name",
                                                "Age",
                                                "Division",
                                                "Position",
                                                "Phone Number",
                                                "Email",
                                                "Address"
                                            ]
                                        }
                                    }
                                    handleClick={handleClick2}
                                    handleShow={handleShow}
                                />
                                <SportCard
                                    title="Sport"
                                    flipping={flipping2.isFlipped}
                                    handleClick={handleClick2}
                                    handleShow={handleShow}
                                />
                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping3.isFlipped} flipDirection="horizontal">
                                <EducationCard

                                    flipping={flipping3.isFlipped}
                                    config={
                                        {
                                            title: "Education",
                                            image: "../images/SchoolCardImage_.jpg",
                                            field: [
                                                "Name",
                                                "Program",
                                                "Tools/ Languages",
                                                "Education Level",
                                                "GPA",
                                                "Phone Number",
                                                "Email"
                                            ]
                                        }}
                                    handleClick={handleClick3}
                                    handleShow={handleShow}
                                />
                                <EducationCard
                                    title="Education"
                                    flipping={flipping3.isFlipped}
                                    handleClick={handleClick3}
                                    handleShow={handleShow}
                                />
                            </ReactCardFlip>

                            <ReactCardFlip isFlipped={flipping4.isFlipped} flipDirection="horizontal">
                                <FitnessCard

                                    flipping={flipping4.isFlipped}
                                    config={
                                        {
                                            title: "Fitness",
                                            image: "../images/FitnessCardImage_.jpg",
                                            field: [
                                                "Name",
                                                "Age",
                                                "Weight",
                                                "Goal",
                                                "Notes",
                                                "Phone Number",
                                                "Email"
                                            ]
                                        }
                                    }
                                    handleClick={handleClick4}
                                    handleShow={handleShow}
                                />
                                <FitnessCard
                                    title="Fitness"
                                    flipping={flipping4.isFlipped}
                                    handleClick={handleClick4}
                                    handleShow={handleShow}
                                />
                            </ReactCardFlip>

                            {template.isSelected ?
                                <Modal aria-labelledby="contained-modal-title-vcenter"
                                    centered show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className="ui yellow">You chosse a {template.title} Team template!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row >
                                                <Col md={7}>
                                                    <span >
                                                        <img style={{ width: '18rem' }} src={template.config.image} alt="business" />

                                                    </span>
                                                </Col>
                                                <Col md={5}>
                                                    {template.config.field.map(x => (
                                                        <h6 >{x}</h6>
                                                    )
                                                    )}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button className="ui inverted red button" onClick={handleClose}>
                                            Cancel
                                    </Button>
                                        <Button className="ui inverted green button" variant="danger">
                                            <Link to={{ pathname: "/member", template: template, setTemplate: setTemplate }}

                                            >
                                                Continue to Step 2
                                        </Link>
                                        </Button>

                                    </Modal.Footer>
                                </Modal>
                                : null
                            }
                        </CardDeck>
                    </div>

                </Col>

            </Row>

        </Container>
    )
}

export default ChooseTemplate;