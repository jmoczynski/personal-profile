import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

function EducationPage(){
    return(
        <Container>
            <h1 className="text-center">Education</h1>
            <p>Click on each tab for more information about each part of Justin's education.</p>
            <Row>
                <Tab.Container>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="0">Worcester Polytechnic Institute</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="1">Ithaca College</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">Ithaca College</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">Hingham High School</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="0">
                                    <p><b>Institution</b>: Worcester Polytechnic Institute</p>
                                    <p><b>Start Date</b>: August 2021</p>
                                    <p><b>End Date</b>: May 2023</p>
                                    <p><b>Level of Education</b>: Master's</p>
                                    <p><b>Degree</b>: Master of Science (M.S.)</p>
                                    <p><b>Major</b>: Cyber Security</p>
                                    <p><b>GPA</b>: 3.58</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="1">
                                    <p><b>Institution</b>: Ithaca College</p>
                                    <p><b>Start Date</b>: August 2017</p>
                                    <p><b>End Date</b>: May 2021</p>
                                    <p><b>Level of Education</b>: Bachelor's</p>
                                    <p><b>Degree</b>: Bachelor of Science (B.S.)</p>
                                    <p><b>Major</b>: Mathematics</p>
                                    <p><b>Minors</b>: Honors Minor in Interdisciplinary Studies, Business Administration, Business Analytics</p>
                                    <p><b>Honors</b>: Graduated Cum Laude, Dean's List Spring 2021, Fall 2020, Spring 2020</p>
                                    <p><b>GPA</b>: 3.56</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <p><b>Institution</b>: Ithaca College</p>
                                    <p><b>Start Date</b>: August 2017</p>
                                    <p><b>End Date</b>: August 2021</p>
                                    <p><b>Level of Education</b>: Bachelor's</p>
                                    <p><b>Degree</b>: Bachelor of Arts (B.A.)</p>
                                    <p><b>Major</b>: Computer Science</p>
                                    <p><b>Honors</b>: Graduated Cum Laude, Dean's List Spring 2021, Fall 2020, Spring 2020</p>
                                    <p><b>GPA</b>: 3.56</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <p><b>Institution</b>: Hingham High School</p>
                                    <p><b>Start Date</b>: August 2014</p>
                                    <p><b>End Date</b>: June 2017</p>
                                    <p><b>Level of Education</b>: High School</p>
                                    <p><b>Degree</b>: High School Diploma</p>
                                    <p><b>GPA</b>: 3.53</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
        </Container>
    );
}

export default EducationPage;