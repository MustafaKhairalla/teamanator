import React from "react";
import {Card} from "react-bootstrap";


const ExampleCardBack = (props) => {

    return (
        <>
            <Card onClick={props.handleClick} className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        <span className="mr-2 ml-2">{props.title} Benefits
                          </span>
                    </Card.Title>
                        <Card.Text>
                            <ul>
                                    <li>Stop forgetting important information </li>
                                    <li>Reminders make you look smart</li>
                                    <li>reduce stress </li>
                                    <li>And so much more…</li>
                                </ul>
                        </Card.Text>
                </Card.Body>
                <Card.Img variant="top"src = {`${process.env.PUBLIC_URL}/images/FitnessCardImage_.jpg`}  />
            </Card>

        </>
    )
};

export default ExampleCardBack;