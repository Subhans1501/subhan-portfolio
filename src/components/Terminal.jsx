import React, { useEffect, useState, useRef } from 'react';

const logs = [
    "INITIALIZING AmsOS ENVIRONMENT...",
    "LOADING MODULES: [TRANSFORMER_RUNTIME, VECTOR_DB, AGENT_STATE]",
    "CONNECTING TO HOST...",
    "CONNECTION ESTABLISHED at 127.0.0.1",
    "FETCHING REPOSITORY DATA...",
    "> AGENTIC_DIALOGUE_SYSTEM loaded.",
    "> FAKE_NEWS_DETECTOR loaded.",
    "LOADING TRANSFORMER MODEL WEIGHTS (fp16)...",
    "WEIGHTS LOADED successfully (2.4s).",
    "EXECUTING PYTHON BUILD SCRIPTS...",
    "COMPILING MLOPS PIPELINE...",
    "SYSTEM STATUS: ONLINE & READY.",
    "WAITING FOR DIRECTIVE..."
];

export default function Terminal() {
    const [lines, setLines] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setLines(prev => {
                const newLines = [...prev, logs[index % logs.length]];
                if (newLines.length > 20) newLines.shift(); // Keep logs clean
                return newLines;
            });
            index++;
        }, 800);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Auto scroll
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div style={{ width: '100%', height: '100%', padding: '1.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <h3 className="section-title" style={{ color: 'var(--color-text)', marginBottom: '1rem', fontSize: '0.9rem' }}>DEPLOYMENT LOGS</h3>
            <div
                ref={containerRef}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: '#a0a0a0',
                    overflowY: 'auto',
                    flex: 1
                }}>
                {lines.map((line, i) => (
                    <div key={i} style={{ marginBottom: '4px' }}>
                        <span style={{ color: 'var(--color-primary)', marginRight: '8px' }}>[MLOps]</span>
                        {line}
                    </div>
                ))}
            </div>
        </div>
    );
}
