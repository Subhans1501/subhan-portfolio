import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Language color map for visual flair
const LANG_COLORS = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Jupyter Notebook': '#DA5B0B',
    'TypeScript': '#3178c6',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'C': '#555555',
    'C++': '#f34b7d',
    'Java': '#b07219',
    'EJS': '#a91e50',
    'React': '#61dafb',
};

export default function ProjectCard({ repo, index = 0 }) {
    const [isHovered, setIsHovered] = useState(false);

    const title = repo.name.replace(/-/g, ' ');
    const tech = repo.language || 'Code';
    const desc = repo.description || 'No description provided.';
    const langColor = LANG_COLORS[tech] || 'var(--color-primary)';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="project-card"
            style={{
                background: isHovered
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isHovered ? 'rgba(0, 243, 255, 0.3)' : 'rgba(255,255,255,0.1)'}`,
                padding: '1.5rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isHovered
                    ? '0 8px 32px rgba(0, 243, 255, 0.15), 0 0 0 1px rgba(0, 243, 255, 0.1)'
                    : '0 4px 6px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden',
            }}
            onClick={() => window.open(repo.html_url, '_blank')}
        >
            {/* Top gradient accent line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${langColor}, transparent)`,
                opacity: isHovered ? 1 : 0.6,
                transition: 'opacity 0.3s ease',
            }} />

            <div>
                {/* Header row: folder icon + arrow */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    {/* Folder icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>

                    {/* External link icon */}
                    <motion.div
                        animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isHovered ? 1 : 0.5, transition: 'opacity 0.3s' }}>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </motion.div>
                </div>

                {/* Title */}
                <h3 style={{
                    marginBottom: '0.75rem',
                    fontSize: '1.1rem',
                    wordBreak: 'break-word',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: isHovered ? 'var(--color-primary)' : 'var(--color-text)',
                    transition: 'color 0.3s ease',
                }}>
                    {title}
                </h3>

                {/* Description */}
                <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-dim)',
                    lineHeight: '1.5',
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    {desc}
                </p>
            </div>

            {/* Footer: Language + Stats */}
            <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
            }}>
                {/* Language indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: langColor,
                        boxShadow: `0 0 6px ${langColor}80`,
                    }} />
                    <span style={{
                        fontSize: '0.78rem',
                        color: 'var(--color-text-dim)',
                        fontFamily: 'var(--font-mono)',
                    }}>
                        {tech}
                    </span>
                </div>

                {/* Stars & Forks */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {stars > 0 && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="var(--color-secondary)">
                                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                            </svg>
                            {stars}
                        </span>
                    )}
                    {forks > 0 && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="var(--color-text-dim)">
                                <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            </svg>
                            {forks}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
