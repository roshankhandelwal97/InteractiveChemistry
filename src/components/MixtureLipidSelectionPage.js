import React from 'react';
import MoleculeSelectionPage from './MoleculeSelectionPage';
import mixtureLipids from '../data/MixtureLipidsData';

const MixtureLipidSelectionPage = () => {
  return <MoleculeSelectionPage pureLipidsData={mixtureLipids} />;
};

export default MixtureLipidSelectionPage;
