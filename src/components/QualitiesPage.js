import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

function QualitiesPage(){
    return(
        <Container>
            <h1 className="text-center">Personal Qualities</h1>
            <Row/>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Teamwork</Card.Title>
                            <Card.Text>Having been a member of several teams, Justin has extensive experience
                                collaborating with teammates and making individual sacrifices in order to achieve a common objective.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Time Management</Card.Title>
                            <Card.Text>Having juggled two majors, three minors, four seasons of collegiate varsity athletics,
                                and two years of part-time employment during his undergraduate career, Justin has experience managing his time
                                in order to continue his participation in multiple activites.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Perseverance</Card.Title>
                            <Card.Text>During his career, Justin has experienced various difficult and stressful situations. Despite the difficulty,
                                he finds ways to push through obstacles and continuing putting his best effort forward in these situations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Commitment</Card.Title>
                            <Card.Text>Justin is dedicated to seeing all tasks, assignments, and commitments through to completion to the best of his ability.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Loyalty</Card.Title>
                            <Card.Text>Justin is dedicated to maintaining integrity and dedication to communities he is a part of and employers he works for.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default QualitiesPage;