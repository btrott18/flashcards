import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

export default function () {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Flashcards</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-nav">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
