import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function NavBar() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <Navbar className="nav-bar" fixed="top" variant="dark">
      <Container className="d-flex">
        <Navbar.Brand href="#home text-white">Hello World</Navbar.Brand>
        <Nav className="float-end text-white">
          <Nav.Link href="#home" onClick={topFunction}>
            Home
          </Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="https://github.com/michaelchristwin">
            <GitHubIcon />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/michael-christwin-b8b980253/">
            <LinkedInIcon />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/mikechristwin">
            <TwitterIcon />
          </Nav.Link>
          <Nav.Link href="mailto:kelechukwuchristwin@gmail.com">
            <EmailIcon />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
