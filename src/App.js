import "./App.css";
import Addtask from "./Components/Addtask";
import Navbar from "./Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tasklist from "./Tasklist";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Addtask />
          <Tasklist />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
