import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed
import '../styles/LandingPage.css'; // Assume you have a CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home'); // Adjust the path as needed
  };

  return (
    <div className="landing-page-container">
      <header className="header">
        <h1>Welcome to <span className="acompchemlab">ACompChemLab</span> Explorer!</h1>
        <p>Your journey into the molecular world begins here.</p>
      </header>
      <main className="main-content">
        <div className="cards-container">
          <div className="card" onClick={handleNavigate}>
            <h2>Membrane Nanoplastic Interactions</h2>
            <p>Click to explore the interactive gallery of molecules.</p>
          </div>
          <div className="card disabled">
            <h2>Bacterial Nanowire</h2>
            <p>Coming Soon! This feature is under development and will be available soon.</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 ACompChemLab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
