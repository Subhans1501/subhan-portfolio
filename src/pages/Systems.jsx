import React from 'react';
import TopologyGraph from '../components/TopologyGraph';

export default function Systems() {
    return (
        <div style={{ padding: '2rem', color: 'var(--color-primary)' }}>
            <h2 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', color: 'var(--color-text)' }}>System Architecture</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-panel">
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Backend Nodes</h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--color-text-dim)' }}>
                        Node_01: Active [Latency: 12ms]<br />
                        Node_02: Active [Latency: 14ms]<br />
                        Node_03: Provisioning...<br />
                        Database_Cluster: Synced
                    </div>
                </div>

                <div className="glass-panel">
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Deployment Pipeline</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--color-accent)', borderRadius: '50%' }}></div>
                        <span>CI/CD: GitHub Actions</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '10px', height: '10px', background: 'var(--color-accent)', borderRadius: '50%' }}></div>
                        <span>Hosting: Vercel Edge</span>
                    </div>
                </div>

                <div className="glass-panel" style={{ gridColumn: '1 / -1', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h3 style={{ alignSelf: 'flex-start', marginBottom: '1rem', color: 'var(--color-text)' }}>Live Topology</h3>
                    <TopologyGraph />
                </div>
            </div>
        </div>
    );
}
