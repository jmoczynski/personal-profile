import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function WorkPage(){
    return(
        <Container>
            <h1 className="text-center">Work Experience</h1>

            <Row>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Position: Lifeguard</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Company</b>: Worcester Polytechic Institute</p>
                            <p><b>Location</b>: Worcester, MA</p>
                            <p><b>Date Started</b>: May 2022</p>
                            <p><b>Date Ended</b>: May 2023</p>
                            <p><b>Description</b>:</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Position: Event Staff - Swimming and Diving</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Company</b>: Worcester Polytechnic Institute</p>
                            <p><b>Location</b>: Worcester, MA</p>
                            <p><b>Date Started</b>: October 2021</p>
                            <p><b>Date Ended</b>: May 2022</p>
                            <p><b>Description</b>:</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Position: Lifeguard</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Company</b>: Ithaca College</p>
                            <p><b>Location</b>: Ithaca, NY</p>
                            <p><b>Date Started</b>: June 2019</p>
                            <p><b>Date Ended</b>: May 2021</p>
                            <p><b>Description</b>:</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Position: Course Grader</Accordion.Header>
                        <Accordion.Body>
                            <p><b>Company</b>: Ithaca College</p>
                            <p><b>Location</b>: Ithaca, NY</p>
                            <p><b>Date Started</b>: January 2019</p>
                            <p><b>Date Ended</b>: May 2019</p>
                            <p><b>Description</b>:</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <h2>Documents</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Resume</Card.Title>
                        <Card.Text>Uploaded 9/15/2023</Card.Text>
                        <a href="/src/static/docs/Resume_JustinMoczynski_Profile.pdf" download>Download</a>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Title>Cover Letter</Card.Title>
                        <Card.Text>Uploaded 9/15/2023</Card.Text>
                        <a href="/src/static/docs/CoverLetter_JustinMoczynski_Profile.pdf" download>Download</a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkPage;