import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardDeck } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import BusinessCard from "../components/BusinessCard"


const TemplateCard = (props) => {

    return (
        <>
            <ReactCardFlip isFlipped={props.flipping.isFlipped} flipDirection="horizontal">
                <BusinessCard
                    title={props.title}
                    handleShow={props.handleShow}
                    handleClick={props.handleClick}
                />

                <BusinessCard
                    handleClick={props.handleClick} />

            </ReactCardFlip>
        </>
    )
};

export default TemplateCard;