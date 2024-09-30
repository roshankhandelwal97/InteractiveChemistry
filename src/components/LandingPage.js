import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed
import '../styles/LandingPage.css'; // Assume you have a CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Membrane-Nanoplastic-Interactions'); // Adjust the path as needed
  };

  useEffect(() => {
    // Function to load an external script
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load the POWr script
    loadScript("https://www.powr-staging.io/powr_staging.js?platform=html");

    // Cleanup function to remove script on component unmount
    return () => {
      document.querySelectorAll('script[src="https://www.powr-staging.io/powr_staging.js?platform=html"]').forEach(el => el.remove());
    };
  }, []);

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
        <div className="hit-counter">
        <div className="powr-hit-counter" id="c3e370f3_1725559918"></div>
        {/* <div className="logo-cover"></div> Cover for the logo */}
        <div className="counter-label">Visit Counter</div>
      </div>
      </footer>
    </div>
  );
};

export default LandingPage;
