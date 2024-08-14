import React, { useRef, useEffect } from 'react';
import * as $3Dmol from '3dmol';
import { elementColors } from '../data/elementColors'; // Import the color mapping


const MoleculeViewer = ({ filePath, style, label, singleStructure }) => {
    const viewerRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        if (!filePath) return;

        const viewer = $3Dmol.createViewer(viewerRef.current, {
            width: 400,
            height: 400,
            antialias: true,
            quality: 'high',
            backgroundColor: ' #343a40'
        });

        fetch(filePath)
            .then(response => response.text())
            .then(moleculeData => {
                const fileFormat = filePath.endsWith('.gro') ? 'gro' : 'pdb';
                viewer.addModel(moleculeData, fileFormat, { keepH: true });

                // Set style based on the passed style prop
                switch (style) {
                    case 'line':
                        Object.keys(elementColors).forEach(element => {
                            viewer.setStyle({elem: element}, {line: {color: elementColors[element], lineWidth: 500}});
                        });
                        // viewer.setStyle({}, {line: {colorscheme: 'Jmol', lineWidth: 3}});
                        break;
                    case 'sphere':
                        Object.keys(elementColors).forEach(element => {
                            viewer.setStyle({elem: element}, {sphere: {color: elementColors[element], lineWidth: 500}});
                        });
                        //viewer.setStyle({}, {sphere: {}});
                        break;
                    case 'stick':
                    default:
                        if (singleStructure === 'Y') {
                            Object.keys(elementColors).forEach(element => {
                                viewer.setStyle({elem: element}, {stick: {color: elementColors[element], radius: 0.2}});
                            });
                        } else {
                            Object.keys(elementColors).forEach(element => {
                                viewer.setStyle({elem: element}, {stick: {color: elementColors[element], radius: 0.2}});
                            });
                            viewer.setStyle({ elem: 'P' }, { sphere: { radius: 3, color: 'orange' } });
                        }
                }
                viewer.zoomTo();
                viewer.render();
                viewer.rotate(270, {x: 1, y: 0, z: 0} );
            });
        return () => {
            if (viewer && typeof viewer.destroy === 'function') {
                viewer.destroy();
            }
        };
    }, [filePath, style, singleStructure]);

    return (
        <div ref={containerRef} style={{ width: '800px', height: '600px', position: 'relative' }}>
            <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>
            {label && (
                <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '100px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black background
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontSize: '16px'
                }}>
                    {label}
                </div>
            )}
        </div>
    );
};

export default MoleculeViewer;
