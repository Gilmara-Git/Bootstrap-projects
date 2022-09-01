import "./App.css";
// import Button from "react-bootstrap/Button";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap"; // this will import the whole library
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
              <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="someone@example.com" />
              <Form.Text className="text-muted">
                We will never share you email with anyone else
              </Form.Text>
            </Form.Group>
            </Col>
              <Col md>
              <Form.Group className="mb-3" controlId="form Password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>  
              </Col>
            </Row>
            
            
            <Button className="mb-3" type="submit" variant="secondary">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200/90" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of React Bootstrap Cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item variant="secondary">Breadcrumbs</Breadcrumb.Item>
            <Breadcrumb.Item active>Active Breadcrumbs</Breadcrumb.Item>
            <Breadcrumb.Item>Breadcrumbs</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is an Alert</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;