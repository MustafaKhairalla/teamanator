import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardDeck } from "react-bootstrap";


const BusinessCard = (props) => {

    return (
        <>
            <Card onClick={props.handleClick} className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/dddtjci2s/image/upload/v1589488079/three-white-ceramic-pots-with-green-leaf-plants-near-open-796602_u470d7.jpg" />
                <Card.Body>
                    <Card.Title>
                        <span className="mr-2 ml-2">{props.title} Team
                               <span
                                className=" mr-2 ml-3 ui circular green icon button"
                                style={{ fontSize: "0.7em", color: "black" }}
                                onClick={props.handleShow}>
                                {/* <i className="fas fa-check fa-lg"></i> */}
                               Select
                           </span></span>


                    </Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                                   </Card.Text>
                </Card.Body>
                <Card.Footer className="justify-content-md-center" >
                    <button onClick={props.handleClick}>Ckick to Flip</button>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                </Card.Footer>
            </Card>

        </>
    )
};

export default BusinessCard;