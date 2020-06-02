import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";


const EducationCard = (props) => {
    const { config = {} } = props;
    const { title = "", field = [] } = config;

    return (
        <>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../images/SchoolCardImage_.jpg" />
                <Card.Body>
                    <Card.Title>
                        {!props.flipping ? <span>{title} Team</span> : <span> Description</span>}

                    </Card.Title>
                    <Card.Body>
                        {!props.flipping ? <div>
                            <div className="ui middle aligned animated list">
                                {field.map(element => (
                                    <div className="item">
                                        <i className="edit outline icon"></i>
                                        <div className="content">
                                            <div className="ui">{element}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div> : <div>
                                This form is great for gathering and storing information about your
                                students! We know it is hard enough getting everyone to stay in their seats and pay attention,
                                this will at least make planning for the chaos that much easier.
                            </div>}

                    </Card.Body>
                </Card.Body>
                <Card.Footer>
                    <div className="ui ml-3 buttons">
                        <button onClick={props.handleClick} className="ui inverted teal button">Flip Me</button>
                        <div className="or"></div>
                        <button
                            data-value={props.title}
                            onClick={() => props.handleShow(config)} className="ui inverted green button">Select</button>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
};

export default EducationCard;