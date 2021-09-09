import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="shadow-sm border-bottom"
    >
      <Container fluid>
        <Link href="/">
          <a className="navbar-brand fw-bold">Arunima Group</a>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/about">
              <a className="nav-link m-2 fw-bold">About Us</a>
            </Link>
            <Link href="/profile" className="m-2">
              <a className="nav-link m-2 fw-bold">Company Profile</a>
            </Link>
            <Link href="/management" className="m-2">
              <a className="nav-link m-2 fw-bold">Management</a>
            </Link>
            <Link href="/products" className="m-2">
              <a className="nav-link m-2 fw-bold">Products</a>
            </Link>
            <Link href="/gallery" className="m-2">
              <a className="nav-link m-2 fw-bold">Gallery</a>
            </Link>
            <Link href="/csr" className="m-2">
              <a className="nav-link m-2 fw-bold">CSR</a>
            </Link>
            <Link href="/contact" className="m-2">
              <a className="nav-link m-2 fw-bold">Contact</a>
            </Link>
          </Nav>
          {/* <Nav>
            <Link href="#" className="m-2">
              <a className="nav-link m-2 fw-bold">ERP</a>
            </Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <footer className="footer border mt-5 py-3">
      <Container>
        <span className="text-muted">Version: 1.0</span>
        <span className="text-muted float-end">
          Developed By: Ntitas IT Ltd.
        </span>
      </Container>
    </footer>
  );
};
