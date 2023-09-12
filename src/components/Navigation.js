import Container from "react-bootstrap/Container";
import {Navbar, Nav} from "react-bootstrap";

function Navigation(){
    return(
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Justin Moczynski</Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation"/>
                <Navbar.Collapse id="navigation">
                    <Container>
                        <Nav>
                            <Nav.Link href="/personal-profile/">Home</Nav.Link>
                            <Nav.Link href="/personal-profile/bio">Biography</Nav.Link>
                            <Nav.Link href="/personal-profile/education">Education</Nav.Link>
                            <Nav.Link href="/personal-profile/experience">Work Experience</Nav.Link>
                            <Nav.Link href="/personal-profile/qualities">Personal Qualities</Nav.Link>
                            <Nav.Link href="/personal-profile/skills">Skills and Certifications</Nav.Link>
                            <Nav.Link href="/personal-profile/development">Professional Development</Nav.Link>
                            <Nav.Link href="/personal-profile/activities">Activities and Involvement</Nav.Link>
                            <Nav.Link href="/personal-profile/hobbies">Hobbies</Nav.Link>
                            <Nav.Link href="/personal-profile/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;