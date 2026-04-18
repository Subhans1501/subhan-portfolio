import React from 'react';
import { motion } from 'framer-motion';
import TopologyGraph from '../components/TopologyGraph';

const techStack = [
    { name: 'Python', category: 'Languages', icon: '🐍' },
    { name: 'JavaScript', category: 'Languages', icon: '⚡' },
    { name: 'TensorFlow', category: 'ML Frameworks', icon: '🧠' },
    { name: 'PyTorch', category: 'ML Frameworks', icon: '🔥' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'MLflow', category: 'MLOps', icon: '📊' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'GitHub Actions', category: 'CI/CD', icon: '🔄' },
];

export default function Systems() {
    return (
        <div style={{ padding: '2rem', color: 'var(--color-primary)' }}>
            <h2 className="section-title" style={{ marginBottom: '2.5rem', color: 'var(--color-text)' }}>SYSTEM_ARCHITECTURE</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                >
                    <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-text)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>TECH_STACK</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    background: 'rgba(0, 243, 255, 0.05)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    color: 'var(--color-text-dim)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                }}
                            >
                                <span>{tech.icon}</span> {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Deployment */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel"
                >
                    <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-text)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>DEPLOYMENT_CONFIG</h3>
                    {[
                        { label: 'CI/CD', value: 'GitHub Actions', color: 'var(--color-accent)' },
                        { label: 'Hosting', value: 'Vercel Edge', color: 'var(--color-primary)' },
                        { label: 'Framework', value: 'React + Vite', color: 'var(--color-secondary)' },
                        { label: 'Styling', value: 'Vanilla CSS + Framer Motion', color: 'var(--color-text-dim)' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginBottom: '12px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.85rem',
                            }}
                        >
                            <div style={{ width: '8px', height: '8px', background: item.color, borderRadius: '50%', boxShadow: `0 0 8px ${item.color}40` }} />
                            <span style={{ color: 'var(--color-text-dim)' }}>{item.label}:</span>
                            <span style={{ color: 'var(--color-text)' }}>{item.value}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Topology Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-panel"
                    style={{ gridColumn: '1 / -1', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
                >
                    <h3 style={{ alignSelf: 'flex-start', marginBottom: '1rem', color: 'var(--color-text)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>SERVICE_TOPOLOGY</h3>
                    <TopologyGraph />
                </motion.div>
            </div>
        </div>
    );
}
