import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ repo }) {
    // Map GitHub data to our card format
    const title = repo.name.replace(/-/g, '_').toUpperCase();
    const tech = repo.language || 'Code';
    const desc = repo.description || 'No description provided.';

    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="project-card"
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                cursor: 'pointer',
                backdropFilter: 'blur(5px)'
            }}
            onClick={() => window.open(repo.html_url, '_blank')}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', border: '1px solid var(--color-primary)', padding: '2px 6px', display: 'inline-block' }}>
                        {tech}
                    </div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)' }}></div>
                </div>

                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', wordBreak: 'break-word' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)', lineHeight: '1.4', marginBottom: '1rem' }}>
                    {desc.length > 80 ? desc.substring(0, 80) + '...' : desc}
                </p>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--color-text-dim)' }}>↗</span>
            </div>
        </motion.div>
    );
}
