import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Ensure the import path is correct
import HomePage from './components/HomePage';
import PureLipidSelectionPage from './components/PureLipidSelectionPage';
import MixtureLipidSelectionPage from './components/MixtureLipidSelectionPage';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { ReactComponent as ChemistrySVG } from './background.svg';

const App = () => {
  return (
    <Router>
    <div className="fullscreen-wave" style={{ animationDuration: '50s' }}></div>
    <div className="fullscreen-wave" style={{ animationDuration: '80s' }}></div>
    <div className="fullscreen-wave" style={{ animationDuration: '40s' }}></div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ACompChemLab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/pure-lipid-selection">Membrane</Nav.Link>
              <Nav.Link as={Link} to="/mixture-lipid-selection">Polystyrene</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pure-lipid-selection" element={<PureLipidSelectionPage />} />
        <Route path="/mixture-lipid-selection" element={<MixtureLipidSelectionPage />} />
      </Routes>
    </Router>
  );
  
};

export default App;
