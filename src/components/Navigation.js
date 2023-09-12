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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/bio">Biography</Nav.Link>
                            <Nav.Link href="/education">Education</Nav.Link>
                            <Nav.Link href="/experience">Work Experience</Nav.Link>
                            <Nav.Link href="/qualities">Personal Qualities</Nav.Link>
                            <Nav.Link href="/skills">Skills and Certifications</Nav.Link>
                            <Nav.Link href="/development">Professional Development</Nav.Link>
                            <Nav.Link href="/activities">Activities and Involvement</Nav.Link>
                            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;