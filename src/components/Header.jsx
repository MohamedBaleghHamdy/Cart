import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../assets/images/res-logo.png";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={img1} alt="logo" style={{ height: 70 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-sm-5 ">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Foods</Nav.Link>
            <Nav.Link href="#deets">Cart</Nav.Link>
            <Nav.Link href="#memes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-sm-5">
            <Nav.Link href="#pricing">
              <CiShoppingBasket />
            </Nav.Link>
            <Nav.Link href="#features">
              <AiOutlineUserAdd />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
