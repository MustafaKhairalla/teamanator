import React from "react";

import { Card } from "react-bootstrap";


const SportCard = (props) => {
    const { config = {} } = props;
    const { title = "", field = [] } = config;


    return (
        <>
            <Card className="bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../images/SportsCardImage.jpg" />
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
                                So you decided to manage your daughters soccer team for this years
                                competitive league (good for you). We know you have lots of distracted kids and over-involved parents coming your way, check this out to make it easier to track
                                everyone’s names and the snack schedule too.
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

export default SportCard;