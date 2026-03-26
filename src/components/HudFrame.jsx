import React from 'react';

// SVG components for corners to keep it clean
const Corner = ({ style, rotation = 0 }) => (
    <svg
        width="40" height="40" viewBox="0 0 40 40"
        style={{ position: 'absolute', transform: `rotate(${rotation}deg)`, ...style }}
    >
        <path d="M2,2 L15,2 L15,8 L35,8 L40,2" stroke="var(--color-primary)" fill="none" strokeWidth="2" opacity="0.8" />
        <path d="M2,2 L2,40" stroke="var(--color-primary)" fill="none" strokeWidth="2" opacity="0.8" />
        <circle cx="6" cy="6" r="2" fill="var(--color-secondary)" />
    </svg>
);

export default function HudFrame() {
    return (
        <div style={{
            position: 'fixed',
            top: '15px',
            left: '15px',
            right: '15px',
            bottom: '15px',
            border: '1px solid rgba(0, 243, 255, 0.2)',
            borderRadius: '8px',
            pointerEvents: 'none',
            zIndex: 50,
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
        }}>
            {/* Top Decor */}
            <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '10px', background: 'var(--color-bg)', border: '1px solid rgba(0,243,255,0.3)', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '80%', height: '2px', background: 'var(--color-primary)', opacity: 0.5 }}></div>
            </div>

            {/* Bottom Decor */}
            <div style={{ position: 'absolute', bottom: '-1px', right: '10%', width: '200px', height: '8px', background: 'var(--color-primary)', opacity: 0.2, clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' }}></div>

            {/* Corners */}
            <Corner style={{ top: '-1px', left: '-1px' }} rotation={0} />
            <Corner style={{ top: '-1px', right: '-1px' }} rotation={90} />
            <Corner style={{ bottom: '-1px', right: '-1px' }} rotation={180} />
            <Corner style={{ bottom: '-1px', left: '-1px' }} rotation={270} />

            {/* Scan lines overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
                backgroundSize: '100% 3px, 3px 100%',
                pointerEvents: 'none',
                opacity: 0.4
            }}></div>
        </div>
    );
}
