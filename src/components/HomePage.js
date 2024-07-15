import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/HomePage.css';

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
            <h1 className="headline">Connect everything. Build anything.</h1>
            <p className="subheadline">Your Chemistry Learning Platform</p>
            <Row className="mt-4 g-4 justify-content-center">
              <Col md={6} lg={4} onClick={() => navigateTo('/pure-lipid-selection')}>
                <div className="custom-card">
                  <div className="custom-card-img">
                    <Card.Img variant="top" src="/images/pureLipids/popc.png" />
                    <div className="custom-card-title">Membrane</div>
                  </div>
                  <div className="custom-card-overlay">
                    <Card.Body>
                      <Card.Text>Learn about Membranes and their role in biology.</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={4} onClick={() => navigateTo('/mixture-lipid-selection')}>
                <div className="custom-card">
                  <div className="custom-card-img">
                    <Card.Img variant="top" src="/images/mixtureLipids/popc_poly.png" />
                    <div className="custom-card-title">Membrane with Polystyrene</div>
                  </div>
                  <div className="custom-card-overlay">
                    <Card.Body>
                      <Card.Text>Explore the complex world of Membranes with Polystyrene.</Card.Text>
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
