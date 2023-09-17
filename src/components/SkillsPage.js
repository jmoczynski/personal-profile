import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SkillsPage(){

    const popover_Python = (
        <Popover id="popover_Python">
            <Popover.Header as="h3">Python</Popover.Header>
            <Popover.Body>Used for software, web application, and application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_R = (
        <Popover id="popover_R">
            <Popover.Header as="h3">R</Popover.Header>
            <Popover.Body>Used for data analysis and linear algebra computations</Popover.Body>
        </Popover>
    );

    const popover_Java = (
        <Popover id="popover_Java">
            <Popover.Header as="h3">Java</Popover.Header>
            <Popover.Body>Used for software development</Popover.Body>
        </Popover>
    );

    const popover_HTML = (
        <Popover id="popover_HTML">
            <Popover.Header as="h3">HTML</Popover.Header>
            <Popover.Body>Used for web application development</Popover.Body>
        </Popover>
    );

    const popover_CSS = (
        <Popover id="popover_CSS">
            <Popover.Header as="h3">CSS</Popover.Header>
            <Popover.Body>Used for web application development</Popover.Body>
        </Popover>
    );

    const popover_JavaScript = (
        <Popover id="popover_JavaScript">
            <Popover.Header as="h3">JavaScript</Popover.Header>
            <Popover.Body>Used for web application development</Popover.Body>
        </Popover>
    );

    const popover_C = (
        <Popover id="popover_C">
            <Popover.Header as="h3">C</Popover.Header>
            <Popover.Body>Used for software and application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_Assembly = (
        <Popover id="popover_Assembly">
            <Popover.Header as="h3">Assembly</Popover.Header>
            <Popover.Body>Used for software analysis and application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_Tableau = (
        <Popover id="popover_Tableau">
            <Popover.Header as="h3">Tableau</Popover.Header>
            <Popover.Body>Used for data analysis</Popover.Body>
        </Popover>
    );

    const popover_Linux = (
        <Popover id="popover_Linux">
            <Popover.Header as="h3">Linux</Popover.Header>
            <Popover.Body>Used for learning about computer organization and systems and application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_MySQL = (
        <Popover id="popover_MySQL">
            <Popover.Header as="h3">MySQL</Popover.Header>
            <Popover.Body>Used for database development</Popover.Body>
        </Popover>
    );

    const popover_SQLite = (
        <Popover id="popover_SQLite">
            <Popover.Header as="h3">SQLite</Popover.Header>
            <Popover.Body>Used for database development</Popover.Body>
        </Popover>
    );

    const popover_Docker = (
        <Popover id="popover_Docker">
            <Popover.Header as="h3">Docker</Popover.Header>
            <Popover.Body>Used for application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_CPlusPlus = (
        <Popover id="popover_CPlusPlus">
            <Popover.Header as="h3">C++</Popover.Header>
            <Popover.Body>Used for software development</Popover.Body>
        </Popover>
    );

    const popover_Flask = (
        <Popover id="popover_Flask">
            <Popover.Header as="h3">Flask</Popover.Header>
            <Popover.Body>Used for web application development</Popover.Body>
        </Popover>
    );

    const popover_Pwntools = (
        <Popover id="popover_Pwntools">
            <Popover.Header as="h3">Pwntools</Popover.Header>
            <Popover.Body>Used for application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_MicrosoftExcel = (
        <Popover id="popover_MicrosoftExcel">
            <Popover.Header as="h3">Microsoft Excel</Popover.Header>
            <Popover.Body>Used for data analysis</Popover.Body>
        </Popover>
    );

    const popover_ReactJS = (
        <Popover id="popover_ReactJS">
            <Popover.Header as="h3">ReactJS</Popover.Header>
            <Popover.Body>Used for web application development</Popover.Body>
        </Popover>
    );

    const popover_MongoDB = (
        <Popover id="popover_MongoDB">
            <Popover.Header as="h3">MongoDB</Popover.Header>
            <Popover.Body>Used for database development</Popover.Body>
        </Popover>
    );

    const popover_Ghidra = (
        <Popover id="popover_Ghidra">
            <Popover.Header as="h3">Ghidra</Popover.Header>
            <Popover.Body>Used for application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_gdb = (
        <Popover id="popover_gdb">
            <Popover.Header as="h3">gdb</Popover.Header>
            <Popover.Body>Used for software and application exploitation development</Popover.Body>
        </Popover>
    );

    const popover_GoogleSheets = (
        <Popover id="popover_GoogleSheets">
            <Popover.Header as="h3">Google Sheets</Popover.Header>
            <Popover.Body>Used for data analysis</Popover.Body>
        </Popover>
    );

    const popover_Skill23 = (
        <Popover id="popover_Skill23">
            <Popover.Header as="h3"></Popover.Header>
            <Popover.Body>Description</Popover.Body>
        </Popover>
    );

    const popover_Skill24 = (
        <Popover id="popover_Skill24">
            <Popover.Header as="h3"></Popover.Header>
            <Popover.Body>Description</Popover.Body>
        </Popover>
    );

    const popover_CertExcelAssociate = (
        <Popover id="popover_CertExcelAssociate">
            <Popover.Header as="h3">Excel Associate</Popover.Header>
            <Popover.Body><p>No Expiration</p>Used for data analysis</Popover.Body>
        </Popover>
    );

    const popover_CertLifeguard = (
        <Popover id="popover_CertLifeguard">
            <Popover.Header as="h3">Lifeguarding</Popover.Header>
            <Popover.Body><p>Expires November 2024</p>Used for lifeguarding at aquatic facilities</Popover.Body>
        </Popover>
    );

    const popover_Cert3 = (
        <Popover id="popover_Cert3">
            <Popover.Header as="h3"></Popover.Header>
            <Popover.Body>Description</Popover.Body>
        </Popover>
    );

    const popover_Cert4 = (
        <Popover id="popover_Cert4">
            <Popover.Header as="h3"></Popover.Header>
            <Popover.Body>Description</Popover.Body>
        </Popover>
    );

    return(
        <Container>
            <h1 className="text-center">Skills and Certifications</h1>
            <p>Click on each skill and certification to learn more about how Justin uses each of these skills and certifications.</p>
            <h3>Skills</h3>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Python}><Button>Python</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_R}><Button>R</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Java}><Button>Java</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_HTML}><Button>HTML</Button></OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_CSS}><Button>CSS</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_JavaScript}><Button>JavaScript</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_C}><Button>C</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Assembly}><Button>Assembly</Button></OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Tableau}><Button>Tableau</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Linux}><Button>Linux</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_MySQL}><Button>MySQL</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_SQLite}><Button>SQLite</Button></OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Docker}><Button>Docker</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_CPlusPlus}><Button>C++</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Flask}><Button>Flask</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Pwntools}><Button>Pwntools</Button></OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_MicrosoftExcel}><Button>Microsoft Excel</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_ReactJS}><Button>ReactJS</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_MongoDB}><Button>MongoDB</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_Ghidra}><Button>Ghidra</Button></OverlayTrigger>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_gdb}><Button>gdb</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_GoogleSheets}><Button>Google Sheets</Button></OverlayTrigger>
                </Col>
                <Col md className="visually-hidden">
                    <OverlayTrigger trigger="click" placement="top"><Button></Button></OverlayTrigger>
                </Col>
                <Col md className="visually-hidden">
                    <OverlayTrigger trigger="click" placement="top"><Button></Button></OverlayTrigger>
                </Col>
            </Row>
            <h3>Certifications</h3>
            <Row>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_CertExcelAssociate}><Button>Microsoft Office Specialist: Excel Associate</Button></OverlayTrigger>
                </Col>
                <Col md>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover_CertLifeguard}><Button>Lifeguarding with CPR/AED for Professional Rescuers and First Aid</Button></OverlayTrigger>
                </Col>
                <Col md className="visually-hidden">
                    <OverlayTrigger trigger="click" placement="top"><Button></Button></OverlayTrigger>
                </Col>
                <Col md className="visually-hidden">
                    <OverlayTrigger trigger="click" placement="top"><Button></Button></OverlayTrigger>
                </Col>
            </Row>
        </Container>
    );
}

export default SkillsPage;