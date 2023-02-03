import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function NavBar() {
  return (
    <Navbar className="nav-bar">
      <Container className="d-flex">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="float-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="https://github.com/michaelchristwin">
            <GitHubIcon />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
