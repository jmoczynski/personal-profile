import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

function DevelopmentPage(){
    return(
        <Container>
            <h1 className="text-center">Professional Development</h1>
            <p>These are the professional development activities Justin either is currently involved in or has completed.</p>
            <Row>
                <h2><u>CompTIA</u></h2>
                <h4 className="visually-hidden">Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Security+</Card.Title>
                            <Card.Body><p>Certification</p></Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Row>
            <Row>
                <h2><u>Coursera</u></h2>
                <h4>Completed</h4>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Introduction to Cyber Attacks</Card.Title>
                            <Card.Body><p>Course</p><p>NYU</p></Card.Body>
                        </Card>
                    </Col>
                    <Col><Card>
                        <Card.Title>Cyber Attack Countermeasures</Card.Title>
                        <Card.Body><p>Course</p><p>NYU</p></Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Fundamentals of Network Communication</Card.Title>
                            <Card.Body><p>Course</p><p>University of Colorado System</p></Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Peer-to-Peer Protocols and Local Area Networks</Card.Title>
                            <Card.Body><p>Course</p><p>University of Colorado System</p></Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Packet Switching Networks and Algorithms</Card.Title>
                            <Card.Body><p>Course</p><p>University of Colorado System</p></Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Introduction to Cybersecurity Tools & Cyber Attacks</Card.Title>
                            <Card.Body><p>Course</p><p>IBM</p></Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h4 className="visually-hidden">In Progress, Upcoming</h4>
            </Row>
            <Row>
                <h2><u>EC-Council</u></h2>
                <h4 className="visually-hidden">Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Malware Analysis Fundamentals</Card.Title>
                            <Card.Body><p>Course</p></Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Getting Started with Vulnerability Management</Card.Title>
                            <Card.Body><p>Course</p></Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row>
                <h2><u>(ISC)2</u></h2>
                <h4 className="visually-hidden">Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>Certified in Cybersecurity (CC)</Card.Title>
                            <Card.Body><p>Certification</p></Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Row>
            <Row className="visually-hidden">
                <h2><u>ISSA</u></h2>
                <h4>Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Row>
            <Row className="visually-hidden">
                <h2><u>LinkedIn Learning</u></h2>
                <h4>Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Row>
            <Row className="visually-hidden">
                <h2><u>Palo Alto Networks</u></h2>
                <h4>Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Row>
            <Row className="visually-hidden">
                <h2><u>SANS Institute</u></h2>
                <h4>Completed</h4>
                <h4>In Progress, Upcoming</h4>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Row>
        </Container>
    );
}

export default DevelopmentPage;