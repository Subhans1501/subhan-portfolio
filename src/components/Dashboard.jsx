import React from 'react';
import Terminal from './Terminal';
import Metrics from './Metrics';
import ProjectCard from './ProjectCard';
import HudFrame from './HudFrame';

const NavBar = () => (
    <div className="nav-bar">
        <div className="menu-icon">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="nav-links">
            <span className="active">Work</span>
            <span>Systems</span>
            <span>Research</span>
            <span>Resume</span>
        </div>
        <div className="nav-actions">
            <button className="hollow-btn">Menus</button>
            <button className="hollow-btn">Deep Reach</button>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <>
            <HudFrame />
            <div className="dashboard-overlay">
                <NavBar />

                <div className="main-content-area">
                    {/* Left Column: Fixed Widgets */}
                    <div className="left-column">
                        <div className="glass-panel metrics-box">
                            <div className="panel-header">
                                <span>System Metrics</span>
                            </div>
                            <Metrics />
                        </div>

                        <div className="glass-panel logs-box">
                            <div className="panel-header">
                                <span>Live Logs</span>
                            </div>
                            <Terminal />
                        </div>

                        <div className="glass-panel bottom-box">
                            <div className="panel-header">System Allocation</div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <div className="circle-stat"></div>
                                <div className="circle-stat"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Area: Floating Project Grid */}
                    <div className="right-area">
                        {/* Top Right Graph - purely decorative as per image */}
                        <div className="glass-panel graph-box" style={{ width: '300px', marginLeft: 'auto', marginBottom: '2rem' }}>
                            <div className="panel-header" style={{ marginBottom: '5px' }}>Live Stats</div>
                            <div style={{ height: '60px', background: 'linear-gradient(90deg, rgba(0,255,157,0) 0%, rgba(0,255,157,0.2) 100%)', borderBottom: '1px solid var(--color-accent)' }}></div>
                        </div>

                        {/* Central Chaos / Projects */}
                        <div className="projects-scatter">
                            <div className="project-wrapper" style={{ top: '10%', left: '10%' }}>
                                <ProjectCard
                                    title="Transformer_Vision"
                                    tech="PyTorch"
                                    desc="Advanced object detection."
                                    stats="ACC: 99%"
                                />
                            </div>
                            <div className="project-wrapper" style={{ top: '40%', left: '40%' }}>
                                <ProjectCard
                                    title="Generative_Audio"
                                    tech="GANs"
                                    desc="Waveform synthesis."
                                    stats="FID: 12.4"
                                />
                            </div>
                            <div className="project-wrapper" style={{ top: '60%', right: '10%' }}>
                                <ProjectCard
                                    title="RL_Nav_System"
                                    tech="OpenAI Gym"
                                    desc="Pathfinding algorithms."
                                    stats="REW: +500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
