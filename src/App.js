import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PureLipidSelectionPage from './components/PureLipidSelectionPage';
import MixtureLipidSelectionPage from './components/MixtureLipidSelectionPage';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { FlaskIcon, MoleculeIcon, TestTubeIcon, BeakerIcon, BunsenBurnerIcon } from './components/chemistry-icons';
import { ReactComponent as ScienceIcon } from './svgs/science.svg';
import { ReactComponent as ProteinIcon } from './svgs/protein.svg';

const App = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.chemistry-icon');
    icons.forEach(icon => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      icon.style.top = `${randomTop}vh`;
      icon.style.left = `${randomLeft}vw`;
    });
  }, []);

  return (
    <Router>
      {/* <div className="chemistry-background" >
        <FlaskIcon className="chemistry-icon flask" />
        <MoleculeIcon className="chemistry-icon molecule" />
        <TestTubeIcon className="chemistry-icon test-tube" />
        <BeakerIcon className="chemistry-icon beaker" />
        <BunsenBurnerIcon className="chemistry-icon burner" />
        <ScienceIcon className="chemistry-icon burner" />
        <ProteinIcon className="chemistry-icon burner" />
        
      </div> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ACompChemLab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Membrane Nanoplastic Interactions</Nav.Link>
              <Nav.Link as={Link} to="/pure-lipid-selection">Membrane</Nav.Link>
              <Nav.Link as={Link} to="/mixture-lipid-selection">Membrane with Polystyrene</Nav.Link>
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
