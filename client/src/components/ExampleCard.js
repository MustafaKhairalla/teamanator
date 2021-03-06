import React from "react";
import {Card} from "react-bootstrap";


const ExampleCard = (props) => {

    return (
        <>
            <Card onClick={props.handleClick} className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top"src = {`${process.env.PUBLIC_URL}/images/EmployeeCardImage.jpg`}  />
                <Card.Body>
                    <Card.Title>
                        <span className="mr-2 ml-2">{props.title} Features
                          </span>
                    </Card.Title>
                        <Card.Text>
                            <ul>
                                    <li>Customize the data for your team </li>
                                    <li>Track important events </li>
                                    <li>Add or subtract team members </li>
                                    <li>And so much more…</li>
                                </ul>
                        </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
};

export default ExampleCard;