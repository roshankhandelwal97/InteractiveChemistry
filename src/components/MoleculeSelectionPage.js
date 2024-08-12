import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Form, Button} from 'react-bootstrap'; 
import MoleculeViewer from './MoleculeViewer';
import AnimationViewer from './AnimationViewer';
import Draggable from 'react-draggable'; // Import Draggable
import '../styles/MoleculeSelectionPage.css';

const MoleculeSelectionPage = ({ pureLipidsData}) => {
  const [selectedMoleculeFile, setSelectedMoleculeFile] = useState(null);
  const [showMainModal, setShowMainModal] = useState(false);
  const [showAnimationModal, setShowAnimationModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [moleculeStyle, setMoleculeStyle] = useState('stick');
  const [showOptions, setShowOptions] = useState(false);

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
  
  return (
    <Container className="molecule-selection-page">
      {pureLipidsData.molecules.map((molecule, index) => (
        <Row key={index} className={`mb-4 align-items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${scrollPosition > (index * 300) ? 'animate' : ''}`}>
          <Col md={4} className="molecule-image">
            <img src={molecule.image} alt={molecule.name} className="img-fluid" />
          </Col>
          <Col md={6} className="molecule-info">
            <h2>{molecule.name}</h2>
            <p>{molecule.description}</p>
            <Button variant="primary" onClick={() => {
              setSelectedMoleculeFile(molecule.files[0]);
              setShowMainModal(true);
            }}>
              Explore
            </Button>
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
                    <MoleculeViewer 
                      filePath={path.link}
                      label={path.title}
                      style={moleculeStyle}
                      singleStructure={path.singleStructure}
                    />
                  </Col>
                ))}
              </Row>
              <Row className="justify-content-md-center">
                <div className="select">
                  <div
                    className="selected"
                    onClick={() => setShowOptions(!showOptions)} // Toggle dropdown visibility
                  >
                    {moleculeStyle.charAt(0).toUpperCase() + moleculeStyle.slice(1)} {/* Display selected style */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="arrow"
                    >
                      <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                      ></path>
                    </svg>
                  </div>
                  {showOptions && (
                    <div className="options">
                      {['line', 'sphere', 'stick'].map(option => (
                        <div
                          key={option}
                          className="option"
                          onClick={() => {
                            setMoleculeStyle(option);
                            setShowOptions(false); // Hide options after selection
                          }}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
