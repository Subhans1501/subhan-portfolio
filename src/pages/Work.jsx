import React from 'react';
import useGithub from '../hooks/useGithub';
import ProjectCard from '../components/ProjectCard';

export default function Work() {
    const { repos, profile, loading, error } = useGithub('Subhans1501');

    if (loading) return <div style={{ padding: '2rem', color: 'var(--color-primary)' }}>LOADING_NEURAL_LINK...</div>;

    return (
        <div style={{ padding: '2rem', paddingBottom: '4rem' }}>
            {/* Hero Section */}
            <div style={{ marginBottom: '4rem', marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                {/* Profile Avatar */}
                <div style={{
                    width: '150px', height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--color-primary)',
                    boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)'
                }}>
                    <img src="/profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div>
                    <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>
                        {profile?.name ? profile.name.toUpperCase() : 'SUBHAN SHAHID'}
                    </h1>
                    <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                        AI ENGINEER // GENERATIVE AI & MLOPS
                    </h2>
                </div>
                <p style={{ maxWidth: '600px', lineHeight: '1.6', color: 'var(--color-text-dim)', fontSize: '1.1rem' }}>
                    {profile?.bio || "Specializing in Agentic AI, Generative Models, and MLOps. Designing autonomous multi-agent dialogue systems, scalable ML pipelines, and high-performance predictive engines for production environments."}
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '15px' }}>
                    <button
                        onClick={() => window.open('https://github.com/Subhans1501', '_blank')}
                        aria-label="GitHub Profile"
                        style={{
                            background: 'rgba(0, 243, 255, 0.1)',
                            border: '1px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            padding: '10px 24px',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}
                    >
                        GITHUB_PROFILE
                    </button>
                    <button
                        onClick={() => window.open('/CV.pdf', '_blank')}
                        aria-label="Open Curriculum Vitae"
                        style={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid var(--color-secondary)',
                            color: 'var(--color-secondary)',
                            padding: '10px 24px',
                            fontFamily: 'var(--font-mono)',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}
                    >
                        DOWNLOAD_CV
                    </button>
                </div>
            </div>

            {/* Expertise Domains */}
            <div style={{ marginBottom: '6rem' }}>
                <h3 className="section-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>DOMAINS OF EXPERTISE</h3>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>

                    {/* Domain Card: Machine Learning */}
                    <div className="glass-panel" style={{ flex: '1 1 300px', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid var(--color-primary)' }}>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>MACHINE LEARNING</h2>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '1.8' }}>
                            <li>Predictive Modeling</li>
                            <li>Feature Engineering</li>
                            <li>Scikit-Learn & XGBoost</li>
                            <li>Automated Pipelines</li>
                        </ul>
                    </div>

                    {/* Domain Card: Deep Learning */}
                    <div className="glass-panel" style={{ flex: '1 1 300px', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid var(--color-secondary)' }}>
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.5rem' }}>DEEP LEARNING</h2>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '1.8' }}>
                            <li>Neural Networks (CNN, RNN)</li>
                            <li>Computer Vision</li>
                            <li>Transformers & NLP</li>
                            <li>PyTorch & TensorFlow</li>
                        </ul>
                    </div>

                    {/* Domain Card: Agentic AI */}
                    <div className="glass-panel" style={{ flex: '1 1 300px', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid var(--color-accent)' }}>
                        <h2 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>AGENTIC AI</h2>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '1.8' }}>
                            <li>Multi-Agent Systems</li>
                            <li>Autonomous Workflows</li>
                            <li>Tool-Using LLMs</li>
                            <li>LangChain & CrewAI</li>
                        </ul>
                    </div>

                    {/* Domain Card: Generative AI */}
                    <div className="glass-panel" style={{ flex: '1 1 300px', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid var(--color-secondary)' }}>
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.5rem' }}>GENERATIVE AI</h2>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '1.8' }}>
                            <li>LLM Fine-Tuning</li>
                            <li>RAG Systems</li>
                            <li>Prompt Engineering</li>
                            <li>Stable Diffusion</li>
                        </ul>
                    </div>

                    {/* Domain Card: MLOps */}
                    <div className="glass-panel" style={{ flex: '1 1 300px', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderTop: '2px solid var(--color-primary)' }}>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>MLOPS</h2>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-dim)', lineHeight: '1.8' }}>
                            <li>Model Deployment</li>
                            <li>CI/CD for ML</li>
                            <li>Docker & Kubernetes</li>
                            <li>Model Monitoring</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Dynamic Project Grid */}
            <div style={{ position: 'relative' }}>
                <h3 className="section-title" style={{ marginBottom: '2rem' }}>FEATURED_REPOSITORIES</h3>

                {/* We use a grid here instead of absolute scatter for professionalism */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '25px'
                }}>
                    {repos.map(repo => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </div>

                {/* Connection Status Indicator */}
                <div style={{
                    marginTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.6
                }}>
                    STATUS: <span style={{ color: error ? 'var(--color-critical)' : 'var(--color-success)' }}>
                        {error ? 'OFFLINE_MODE (API_LIMIT)' : 'LIVE_CONNECTION'}
                    </span>
                </div>
            </div>
        </div>
    );
}
