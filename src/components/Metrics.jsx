import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Metrics Component
export default function Metrics() {
    const [cpu, setCpu] = useState(30);
    const [gpu, setGpu] = useState(45);
    const [memory, setMemory] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCpu(Math.floor(Math.random() * 30) + 20);
            setGpu(Math.floor(Math.random() * 40) + 40);
            setMemory(Math.floor(Math.random() * 10) + 55);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const MetricBar = ({ label, value, color }) => (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                    style={{ height: '100%', background: color }}
                />
            </div>
        </div>
    );

    return (
        <div style={{ height: '100%' }}>
            <h3 className="section-title">SYSTEM_METRICS</h3>
            <div style={{ marginTop: '1rem' }}>
                <MetricBar label="CPU_USAGE" value={cpu} color="var(--color-primary)" />
                <MetricBar label="GPU_LOAD" value={gpu} color="var(--color-secondary)" />
                <MetricBar label="TENSOR_CORES" value={memory} color="var(--color-accent)" />
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666' }}>Active Processes</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: '#fff' }}>24</div>
            </div>
        </div>
    );
}
