import React from 'react';

export const FlaskIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="#000" className={className}>
    <path d="M16 2v4h4v10c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6h4V2H16zm2 6h28v10H18V8zm4 14v32.28A5.972 5.972 0 0028 58h8c3.31 0 6-2.69 6-6V22H22zm4 2h12v28c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V24z" />
  </svg>
);

export const MoleculeIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" width="48" height="48" fill="#000" className={className}>
    <circle cx="32" cy="32" r="10"/>
    <circle cx="32" cy="10" r="4"/>
    <circle cx="10" cy="32" r="4"/>
    <circle cx="54" cy="32" r="4"/>
    <circle cx="32" cy="54" r="4"/>
  </svg>
);

export const TestTubeIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="#000" className={className}>
    <path d="M42 2H22v4h4v46c0 4.42 3.58 8 8 8s8-3.58 8-8V6h4V2zm-8 54c-1.1 0-2-.9-2-2V8h4v46c0 1.1-.9 2-2 2z" />
  </svg>
);

export const BeakerIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="#000" className={className}>
    <path d="M16 2h32v4h-2v46c0 3.31-2.69 6-6 6H24c-3.31 0-6-2.69-6-6V6h-2V2zm4 6v44c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8H20z"/>
  </svg>
);

export const BunsenBurnerIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" width="64" height="64" fill="#000" className={className}>
    <path d="M30 2h4v26h-4zM20 30h24v6H20zm-4 8h32v4H16zm-4 8h40v4H12zm-4 8h48v4H8z"/>
  </svg>
);
