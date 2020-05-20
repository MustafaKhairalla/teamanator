import React from "react";
import {Card} from "react-bootstrap";


const ExampleCard = (props) => {

    return (
        <>
            <Card onClick={props.handleClick} className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589488079/three-white-ceramic-pots-with-green-leaf-plants-near-open-796602_u470d7.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className="mr-2 ml-2">{props.title} Features
                               <span
                                className=" mr-2 ml-3 ui circular green icon button"
                                style={{ fontSize: "0.7em", color: "black" }}
                                onClick={props.handleShow}>
                                {/* <i className="fas fa-check fa-lg"></i> */}
                               Select
                           </span></span>
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