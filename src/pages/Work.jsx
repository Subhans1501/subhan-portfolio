import React from 'react';
import { motion } from 'framer-motion';
import useGithub from '../hooks/useGithub';
import ProjectCard from '../components/ProjectCard';

export default function Work() {
    const { repos, profile, loading, error } = useGithub('Subhans1501');

    if (loading) {
        return (
            <div style={{
                padding: '4rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <div className="loading-pulse" style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '2px solid rgba(0, 243, 255, 0.3)',
                    borderTopColor: 'var(--color-primary)',
                    animation: 'spin 1s linear infinite',
                }} />
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-primary)',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                }}>
                    LOADING_NEURAL_LINK...
                </div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '5rem', marginTop: '2rem' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {/* Profile Avatar */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            width: '140px', height: '140px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid var(--color-primary)',
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.3), 0 0 60px rgba(0, 243, 255, 0.1)',
                            flexShrink: 0,
                        }}
                    >
                        <img src="/profile.png" alt="Subhan Shahid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h1 className="gradient-text" style={{ fontSize: '2.8rem', marginBottom: '0.5rem', fontWeight: 800, lineHeight: 1.1 }}>
                            {profile?.name ? profile.name.toUpperCase() : 'SUBHAN SHAHID'}
                        </h1>
                        <h2 style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-secondary)',
                            fontSize: '1rem',
                            fontWeight: 400,
                            letterSpacing: '1px',
                        }}>
                            AI ENGINEER // GENERATIVE AI & MLOPS
                        </h2>
                    </div>
                </div>

                <p style={{
                    maxWidth: '700px',
                    lineHeight: '1.7',
                    color: 'var(--color-text-dim)',
                    fontSize: '1.05rem',
                    marginBottom: '1.5rem',
                }}>
                    {profile?.bio || "Specializing in Agentic AI, Generative Models, and MLOps. Designing autonomous multi-agent dialogue systems, scalable ML pipelines, and high-performance predictive engines for production environments."}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => window.open('https://github.com/Subhans1501', '_blank')}
                        aria-label="GitHub Profile"
                        style={{
                            background: 'rgba(0, 243, 255, 0.1)',
                            border: '1px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            padding: '10px 24px',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            letterSpacing: '1px',
                        }}
                    >
                        ⟡ GITHUB_PROFILE
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => window.open('/CV.pdf', '_blank')}
                        aria-label="Open Curriculum Vitae"
                        style={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid var(--color-secondary)',
                            color: 'var(--color-secondary)',
                            padding: '10px 24px',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            letterSpacing: '1px',
                        }}
                    >
                        ↓ DOWNLOAD_CV
                    </motion.button>
                </div>
            </motion.div>

            {/* Expertise Domains */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ marginBottom: '6rem' }}
            >
                <h3 className="section-title" style={{ marginBottom: '2rem', textAlign: 'center', display: 'block' }}>DOMAINS_OF_EXPERTISE</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>

                    {[
                        { title: 'MACHINE LEARNING', color: 'var(--color-primary)', items: ['Predictive Modeling', 'Feature Engineering', 'Scikit-Learn & XGBoost', 'Automated Pipelines'] },
                        { title: 'DEEP LEARNING', color: 'var(--color-secondary)', items: ['Neural Networks (CNN, RNN)', 'Computer Vision', 'Transformers & NLP', 'PyTorch & TensorFlow'] },
                        { title: 'AGENTIC AI', color: 'var(--color-accent)', items: ['Multi-Agent Systems', 'Autonomous Workflows', 'Tool-Using LLMs', 'LangChain & CrewAI'] },
                        { title: 'GENERATIVE AI', color: 'var(--color-secondary)', items: ['LLM Fine-Tuning', 'RAG Systems', 'Prompt Engineering', 'Stable Diffusion'] },
                        { title: 'MLOPS', color: 'var(--color-primary)', items: ['Model Deployment', 'CI/CD for ML', 'Docker & Kubernetes', 'Model Monitoring'] },
                    ].map((domain, i) => (
                        <motion.div
                            key={domain.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            whileHover={{ scale: 1.03, y: -3 }}
                            className="glass-panel"
                            style={{
                                minHeight: '220px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderTop: `2px solid ${domain.color}`,
                                cursor: 'default',
                                transition: 'box-shadow 0.3s ease',
                            }}
                        >
                            <h2 style={{ color: domain.color, marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 600 }}>{domain.title}</h2>
                            <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '2' }}>
                                {domain.items.map(item => (
                                    <li key={item} style={{ fontSize: '0.95rem' }}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>
            </motion.div>

            {/* Pinned Repositories */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ position: 'relative' }}
            >
                <h3 className="section-title" style={{ marginBottom: '2rem' }}>PINNED_REPOSITORIES</h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '25px'
                }}>
                    {repos.map((repo, index) => (
                        <ProjectCard key={repo.id} repo={repo} index={index} />
                    ))}
                </div>

                {/* Connection Status Indicator */}
                <div style={{
                    marginTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                }}>
                    <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: error ? 'var(--color-critical)' : 'var(--color-success)',
                        boxShadow: error ? '0 0 6px var(--color-critical)' : '0 0 6px var(--color-success)',
                    }} />
                    STATUS: <span style={{ color: error ? 'var(--color-critical)' : 'var(--color-success)' }}>
                        {error ? 'OFFLINE_MODE' : 'LIVE_CONNECTION'}
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
