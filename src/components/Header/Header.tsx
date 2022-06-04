import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import starWarsLogo from "../../assets/star-wars-logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={starWarsLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Lister</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
