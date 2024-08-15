import React, { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol';
import { elementColors } from '../data/elementColors';

const AnimationViewer = ({ animationPath, label, style }) => {
    const viewerRef = useRef();
    const containerRef = useRef();
    const requestAnimationFrameId = useRef();

    useEffect(() => {
        if (!animationPath) return;

        const viewer = $3Dmol.createViewer(viewerRef.current, { backgroundColor: '#2a4163' });
        const options = { keepH: true, assignbonds: true };

        fetch(animationPath)
            .then((res) => res.text())
            .then((data) => {
                viewer.addModelsAsFrames(data, "pdb", options);
                viewer.animate({ loop: "forward", reps: 0 });

                switch (style) {
                    case 'line':
                        Object.keys(elementColors).forEach(element => {
                            viewer.setStyle({elem: element}, {line: {color: elementColors[element], lineWidth: 500}});
                        });
                        break;
                    case 'sphere':
                        Object.keys(elementColors).forEach(element => {
                            viewer.setStyle({elem: element}, {sphere: {color: elementColors[element], radius: 1.5}});
                        });
                        break;
                    case 'stick':
                    default:
                        Object.keys(elementColors).forEach(element => {
                            viewer.setStyle({elem: element}, {stick: {color: elementColors[element], radius: 0.2}});
                        });
                        viewer.setStyle({ elem: 'P' }, { sphere: { radius: 3, color: 'orange' } });
                }

                viewer.zoomTo();
                viewer.rotate(270, {x: 1, y: 0, z: 0} );

                const animate = () => {
                    viewer.render();
                    requestAnimationFrameId.current = requestAnimationFrame(animate);
                };
                animate();
            });

        return () => {
            if (viewer && typeof viewer.destroy === 'function') {
                viewer.destroy();
            }
            if (requestAnimationFrameId.current) {
                cancelAnimationFrame(requestAnimationFrameId.current);
            }
        };
    }, [animationPath, style]);

    return (
        <div ref={containerRef} style={{ width: '800px', height: '753px', position: 'relative' }}>
            <div ref={viewerRef} style={{ width: '100%', height: '100%' }}></div>
            {label && (
                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
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

export default AnimationViewer;
