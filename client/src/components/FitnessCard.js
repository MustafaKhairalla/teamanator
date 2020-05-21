import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardDeck } from "react-bootstrap";


const FitnessCard = (props) => {
    const { config = {} } = props;
    const { title = "", field = [] } = config;

    return (
        <>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../images/FitnessCardImage_.jpg" />
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
                                This is perfect for tracking all those clients you
                                have in your personal training business. Because you kick-ass in
                        the gym and just need a spotter on the paperwork </div>}

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

export default FitnessCard;