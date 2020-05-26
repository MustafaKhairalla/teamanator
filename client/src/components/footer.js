import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FooterStyle } from '../style/index';

function Footer() {
    return (
        <FooterStyle>
        <div id="footer-main">
            <Row  id="thank-you">
                <Col className="text-left">
                    <h6>More to Explore</h6>
                    <ul className="text-left">
                        <li>
                            <a href="https://tripoint.herokuapp.com/">TriPoints</a>
                        </li>
                        <li>
                            <a href="https://mustafakhairalla.github.io/duck-duck-code/">Foodecipe</a>
                        </li>
                    </ul>
                </Col>
                <Col className="text-left">
                    <h6>Team Duck</h6>
                <p id="duck-bio">Team Duck is a highly-talented group of young, coding professionals from the University of Denver's coding bootcamp.
                    We specialize in making functional and beautiful web applications.
                </p>

                </Col>
                <Col className="text-left">
                    <h6>Meet the Team</h6>
                    <ul id="duck-bio">
                        <li>Amy Altman</li>
                        <li>Cristian Robinson</li>
                        <li>Elena Demidionok</li>
                        <li>Mustafa Khairalla</li>
                        <li>Jake Petersen</li>
                    </ul>

                </Col>

            </Row>
        </div>
        </FooterStyle>
    )
};

export default Footer;