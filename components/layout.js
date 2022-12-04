import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

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
      bg="white"
      className="shadow-sm border-bottom"
      sticky="top"
    >
      <Container>
        <Link href="/">
          <a className="navbar-brand fw-bold">
            Arunima <span className="golden">Group</span>
          </a>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/profile">
              <a className="nav-link m-2 fw-bold font">Profile</a>
            </Link>
            <Link href="/management" className="m-2">
              <a className="nav-link m-2 fw-bold font">Management</a>
            </Link>
            <Link href="/products" className="m-2">
              <a className="nav-link m-2 fw-bold font">Products</a>
            </Link>
            <Link href="/gallery" className="m-2">
              <a className="nav-link m-2 fw-bold font">Gallery</a>
            </Link>
            <Link href="/csr" className="m-2">
              <a className="nav-link m-2 fw-bold font">CSR</a>
            </Link>
            <Link href="/contact" className="m-2">
              <a className="nav-link m-2 fw-bold font">Contact</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <footer className="footer border mt-5 py-3 bg-white">
      <Container>
        <span className="text-muted">
          &copy; 2021 Arunima Group. All Rights Reserved.
        </span>
        <span className="text-muted float-end">
          Developed By: Ntitas IT Ltd.
        </span>
      </Container>
    </footer>
  );
};
