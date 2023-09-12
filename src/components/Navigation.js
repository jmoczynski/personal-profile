import Container from "react-bootstrap/Container";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(){
    return(
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Justin Moczynski</Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation"/>
                <Navbar.Collapse id="navigation">
                    <Container>
                        <Nav>
                            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/bio">Biography</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/education">Education</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/experience">Work Experience</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/qualities">Personal Qualities</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/skills">Skills and Certifications</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/development">Professional Development</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/activities">Activities and Involvement</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/hobbies">Hobbies</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;