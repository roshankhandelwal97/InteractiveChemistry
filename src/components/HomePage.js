import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/HomePage.css';
import ImageRender from './ImageRender';
const HomePage = () => {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="banner">
      <Container>
        <Row className="align-items-center text-center">
          <Col>
          <h2 className="headline">
            Your window to <span className="acompchemlab">ACompChemLab</span> Research
          </h2>

            <p className="subheadline">Learn about membranes and how nanoplastic interacts with them</p>
            <p className="subheadline-intro">Biological membranes are primarily composed of a phospholipid bilayer.
             The hydrophilic (water-attracting) heads face outward towards the aqueous environment, while the hydrophobic (water-repelling) 
            tails face inward, forming a semi-permeable barrier.
            One of the most prevalent polymers found in marine plastic debris is polystyrene (PS).
            The ingestion of plastic microparticles poses significant risks to marine life, as it can lead to the release of harmful plastic monomers and toxic chemical additives, 
            including phthalates. Biological membranes represent the first line of defense against such foreign particles, playing a crucial role in mitigating the entry and subsequent effects of these potentially hazardous substances at the cellular level. The ongoing accumulation of PS in marine environments highlights the urgent 
            need for comprehensive strategies to address plastic pollution and protect marine ecosystems.</p>
            <Row className="mt-4 g-4 justify-content-center">
              <Col md={6} lg={4} onClick={() => navigateTo('/Membrane')}>
                <div className="custom-card">
                  <div className="custom-card-img">
                    <ImageRender
                        filePath="/lipids/pureLipids/200_POPC_initial.pdb"
                        singleStructure= "N"
                    />
                    <div className="custom-card-title">Membrane</div>
                  </div>
                  <div className="custom-card-overlay">
                    <Card.Body>
                      <Card.Text>Learn about Membranes and their role in biology</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} onClick={() => navigateTo('/Membrane-with-Polystyrene')}>
                <div className="custom-card">
                  <div className="custom-card-img">
                    <ImageRender
                        filePath="/lipids/mixtureLipids/popc_poly_nowat_ion.pdb"
                        singleStructure= "N"
                    />
                    <div className="custom-card-title">Membrane with Polystyrene</div>
                  </div>
                  <div className="custom-card-overlay">
                    <Card.Body>
                      <Card.Text>Explore the complex world of Membranes with Polystyrene</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
