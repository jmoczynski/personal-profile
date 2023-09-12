import {Navbar, Nav} from "react-bootstrap";

function Navigation(){
    return(
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand href="/personal-profile/">Justin Moczynski</Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation"/>
            <Navbar.Collapse id="navigation">
                <Nav>
                    <Nav.Link href="/personal-profile/">Home</Nav.Link>
                    <Nav.Link href="#bio">Biography</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Work Experience</Nav.Link>
                    <Nav.Link href="#qualities">Personal Qualities</Nav.Link>
                    <Nav.Link href="#skills">Skills and Certifications</Nav.Link>
                    <Nav.Link href="#development">Professional Development</Nav.Link>
                    <Nav.Link href="#activities">Activities and Involvement</Nav.Link>
                    <Nav.Link href="#hobbies">Hobbies</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;