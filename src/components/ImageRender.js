import React, { useRef, useEffect } from 'react';
import * as $3Dmol from '3dmol';
import { elementColors } from '../data/elementColors';

const ImageRender = ({ filePath, label, singleStructure }) => {
    const viewerRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        if (!filePath) return;

        const viewer = $3Dmol.createViewer(viewerRef.current, {
            width: 400,
            height: 400,
            antialias: true,
            quality: 'high',
            backgroundColor: '#2a4163',//9fa7b3
            zoomEnabled: false
        });

        fetch(filePath)
            .then(response => response.text())
            .then(moleculeData => {
                const fileFormat = filePath.endsWith('.gro') ? 'gro' : 'pdb';
                viewer.addModel(moleculeData, fileFormat, { keepH: true });

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

                viewer.zoomTo();
                viewer.render();
                viewer.rotate(270, {x: 1, y: 0, z: 0} );
                startRotation(viewer);
            });

        function startRotation(viewer) {
            const rotationSpeed = 0.7; // Degrees per frame, adjust as needed
            function rotate() {
                if (viewer) {
                    viewer.rotate(rotationSpeed, {x: 0, y: 0, z: 1}); // Adjust the axis as needed
                    viewer.render(); // Ensure changes are rendered
                    requestAnimationFrame(rotate); // Call rotate recursively via the window's requestAnimationFrame
                }
            }
            rotate(); // Start the rotation
        }

        return () => {
            if (viewer && typeof viewer.destroy === 'function') {
                viewer.destroy();
            }
        };
    }, [filePath, singleStructure]);

    return (
        <div ref={containerRef} style={{ width: '425px', height: '400px', position: 'relative', overflowX: 'hidden', // Disables horizontal scrolling
        overflowY: 'hidden' }}>
            <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default ImageRender;
