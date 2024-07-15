import React from 'react';
import MoleculeSelectionPage from './MoleculeSelectionPage';
import pureLipids from '../data/PureLipidsData';

const PureLipidSelectionPage = () => {
  return <MoleculeSelectionPage pureLipidsData={pureLipids} />;
};

export default PureLipidSelectionPage;
