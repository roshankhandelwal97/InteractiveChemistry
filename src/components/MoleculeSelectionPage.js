import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button} from 'react-bootstrap'; 
import MoleculeViewer from './MoleculeViewer';
import AnimationViewer from './AnimationViewer';
import ImageRender from './ImageRender';
import Draggable from 'react-draggable'; // Import Draggable
import '../styles/MoleculeSelectionPage.css';

const MoleculeSelectionPage = ({ pureLipidsData}) => {
  const [selectedMoleculeFile, setSelectedMoleculeFile] = useState(null);
  const [showMainModal, setShowMainModal] = useState(false);
  const [showAnimationModal, setShowAnimationModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [moleculeStyle, setMoleculeStyle] = useState('stick');
  const [showOptions, setShowOptions] = useState(false);
  const [animationStyle, setAnimationStyle] = useState('stick');
  const [showAnimationOptions, setShowAnimationOptions] = useState(false);

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
      {pureLipidsData.molecules.map((molecule, index, array) => (
        <div className="card-style"> {/* Apply the card style */}
        <Row key={index} className={`mb-4 align-items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${scrollPosition > (index * 300) ? 'animate' : ''}`}>
          <Col md={4} className="molecule-image">
          <ImageRender
              filePath={molecule.image}
              singleStructure={molecule.singleStructure}
            />
          </Col>
          <Col md={6} className="molecule-info">
            <h2>{molecule.name}</h2>
            <h6 style={{ fontStyle: 'italic', color: '#e23737' }}>{molecule.chemName}</h6>
            <p style={{ marginBottom: '0.5rem', textAlign: 'justify' }}>{molecule.description}</p>
            <Button variant="primary" className="explore-button" onClick={() => {
              setSelectedMoleculeFile(molecule.files[0]);
              setShowMainModal(true);
            }}>
              Explore
            </Button>
          </Col>
        </Row>
        </div>
      ))}

      {selectedMoleculeFile && (
        <Modal show={showMainModal} onHide={handleCloseMainModal} size="lg" fullscreen={true} centered>
          <Modal.Header closeButton className="cursor-move">
          <div className="select" style={{ position: 'absolute', left: '10px', top: '20%' }}>
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
          <Modal.Title style={{
              flex: '1 1 auto',
              textAlign: 'center',
              color: '#d6fb00',  // Set text color to white
              fontSize: '2rem',  // Increase font size
              fontWeight: 'bold'  // Make the text bold
            }}>
            {selectedMoleculeFile.displayName}
          </Modal.Title>
            {hasAnimations() && (
              <Button onClick={handleGoToAnimation} variant="secondary" className="explore-button">
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
        <Modal.Title style={{ flex: '1 1 auto', textAlign: 'center', fontSize: '2.3rem', color:'#d6fb00'}}>{selectedMoleculeFile.animations.title}</Modal.Title>
        <div className="select" style={{ position: 'absolute', right: '0px', left: '10px',top: '25px' }}>
          <div
              className="selected"
              onClick={() => setShowAnimationOptions(!showAnimationOptions)} // Toggle dropdown visibility
          >
              {animationStyle.charAt(0).toUpperCase() + animationStyle.slice(1)} {/* Display selected style */}
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
          {showAnimationOptions && (
              <div className="options">
                  {['line', 'sphere', 'stick'].map(option => (
                      <div
                          key={option}
                          className="option"
                          onClick={() => {
                              setAnimationStyle(option);
                              setShowAnimationOptions(false); // Hide options after selection
                          }}
                      >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                      </div>
                  ))}
              </div>
          )}
        </div>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <AnimationViewer animationPath={selectedMoleculeFile.animations.link} style={animationStyle} />
      </Modal.Body>
    </Modal>
      </Draggable>
    )}

    </Container>
  );
};

export default MoleculeSelectionPage;
