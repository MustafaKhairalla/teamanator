import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardDeck } from "react-bootstrap";


const BusinessCard = (props) => {
    const { config = {} } = props;
    const { title = '', field = [] } = config;
    return (
        <>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../images/EmployeeCardImage.jpg" />
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
                        </div> : <div> Manage all your employees important data from one place.
                        So the next time you need the email address of that guy in accounting – who
                        you can’t remember his name but he has a funny go-tee and kinda looks
                            like Tony Stark – you can </div>}
                    </Card.Body>
                </Card.Body>
                <Card.Footer>
                    <div className="ui ml-3 buttons">
                        <button onClick={props.handleClick} className="ui inverted teal button">Flip Me</button>
                        <div className="or"></div>
                        <button
                            data-value={title}
                            onClick={() => props.handleShow(config)} className="ui inverted green button">Select</button>
                    </div>

                </Card.Footer>
            </Card>

        </>
    )
};

export default BusinessCard;