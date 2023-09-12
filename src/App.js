import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function App() {
  return (
      <Container>
          <h1 className="text-center">Welcome</h1>
          <p>Welcome to Justin Moczynski's personal website.</p>
          <Image src={require("./static/images/senior-portrait.jpg")} fluid roundedCircle/>
      </Container>
  );
}

export default App;
