import React, { useState, useEffect } from 'react';
import { Container, Modal, Row, Col, Button } from 'react-bootstrap';
import MoleculeViewer from './MoleculeViewer';
import AnimationViewer from './AnimationViewer';
import Draggable from 'react-draggable'; // Import Draggable
import '../styles/MoleculeSelectionPage.css';

const MoleculeSelectionPage = ({ pureLipidsData }) => {
  const [selectedMoleculeFile, setSelectedMoleculeFile] = useState(null);
  const [showMainModal, setShowMainModal] = useState(false);
  const [showAnimationModal, setShowAnimationModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleExploreClick = (file) => {
    setSelectedMoleculeFile(file);
    setShowMainModal(true);
  };

  const handleCloseMainModal = () => {
    setShowMainModal(false);
  };

  const handleGoToAnimation = () => {
    setShowAnimationModal(true);
  };

  const handleCloseAnimationModal = () => {
    setShowAnimationModal(false);
  };

  const hasAnimations = () => {
    return selectedMoleculeFile && selectedMoleculeFile.animations && selectedMoleculeFile.animations.link;
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="molecule-selection-page">
      {pureLipidsData.molecules.map((molecule, index) => (
        <Row key={index} className={`mb-4 align-items-center ${scrollPosition > (index * 300) ? 'animate' : ''}`}>
          <Col md={4}>
            <img src={molecule.image} alt={molecule.name} className="img-fluid" />
          </Col>
          <Col md={6}>
            <div className="molecule-info">
              <h2>{molecule.name}</h2>
              <p>{molecule.description}</p>
              <Button variant="primary" onClick={() => handleExploreClick(molecule.files[0])}>
                Explore
              </Button>
            </div>
          </Col>
        </Row>
      ))}

      {selectedMoleculeFile && (
        <Modal show={showMainModal} onHide={handleCloseMainModal} size="lg" fullscreen={true} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMoleculeFile.displayName}</Modal.Title>
            {hasAnimations() && (
              <Button onClick={handleGoToAnimation} variant="secondary" className="ml-auto toggle-animation-button">
                View Animation
              </Button>
            )}
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row className="justify-content-md-center">
                {selectedMoleculeFile.paths && Object.entries(selectedMoleculeFile.paths).map(([key, path]) => (
                  <Col md={6} key={key} className="mb-3">
                    <MoleculeViewer filePath={path.link} label={path.title} />
                  </Col>
                ))}
              </Row>
              <Row>
                <Col>
                  <p>{selectedMoleculeFile.description}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      )}

    {selectedMoleculeFile && showAnimationModal && (
      <Draggable handle=".modal-header">
        <Modal show={showAnimationModal} onHide={handleCloseAnimationModal} dialogClassName="custom-animation-modal-dialog" centered>
          <Modal.Header closeButton className="cursor-move">
            <Modal.Title>{selectedMoleculeFile.animations.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center align-items-center">
            <AnimationViewer animationPath={selectedMoleculeFile.animations.link} />
          </Modal.Body>
        </Modal>
      </Draggable>
    )}

    </Container>
  );
};

export default MoleculeSelectionPage;
