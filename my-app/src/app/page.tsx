"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Image, Nav, Navbar} from "react-bootstrap";

const StussyHeader = () => (
  <Navbar expand="lg" className="header">
    <Container fluid className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center nav-left">
        <Navbar.Brand href="#home">
          <Image src="/stussyLogo.png" alt="Stussy Logo" width={80} height={30} className="logo" />
        </Navbar.Brand>
        <Nav className="ms-3 nav-menu">
          <Nav.Link href="#" className="nav-link">
            SHOP <span className="arrow">{'>'}</span>
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">FEATURES</Nav.Link>
          <Nav.Link href="#" className="nav-link">
            SUPPORT <span className="arrow">{'>'}</span>
          </Nav.Link>
        </Nav>
      </div>
      <Nav className="nav-right">
        <Nav.Link href="#" className="nav-link">SEARCH</Nav.Link>
        <Nav.Link href="#" className="nav-link">US / $</Nav.Link>
        <Nav.Link href="#" className="nav-link">BAG</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const StussyMainContent = () => (
  <main className="main">
    <div className="hero-section">
      <div className="hero-image">
        <Image src="/stussyMain.png" alt="Person Wearing Stussy Hoodie" fluid />
      </div>
    </div>
  </main>
);

const StussyBottomInfo = () => (
  <div className="bottom-info d-flex justify-content-between align-items-center">
    <div className="newsletter">NEWSLETTER</div>
    <div className="copyright">© 2025 STUSSY</div>
  </div>
);

export default function StussyPage() {
  return (
    <>
      <StussyHeader />
      <StussyMainContent />
      <StussyBottomInfo />
    </>
  );
}
