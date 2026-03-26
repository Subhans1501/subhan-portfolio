import React from 'react';
import { motion } from 'framer-motion';

const Node = ({ cx, cy, label, color, delay }) => (
    <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
    >
        <circle cx={cx} cy={cy} r="25" fill="rgba(0,0,0,0.5)" stroke={color} strokeWidth="2" />
        <circle cx={cx} cy={cy} r="8" fill={color} className="blink" />
        <text x={cx} y={cy + 45} fill="white" fontSize="12" textAnchor="middle" fontFamily="var(--font-mono)">{label}</text>
    </motion.g>
);

const Connection = ({ x1, y1, x2, y2, color }) => (
    <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.3" />
        {/* Animated Packet */}
        <motion.circle
            r="3"
            fill={color}
            animate={{
                cx: [x1, x2],
                cy: [y1, y2]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    </g>
);

export default function TopologyGraph() {
    return (
        <svg width="100%" height="300" viewBox="0 0 600 300" style={{ overflow: 'visible' }}>
            {/* Connections */}
            <Connection x1={100} y1={150} x2={300} y2={100} color="var(--color-primary)" />
            <Connection x1={100} y1={150} x2={300} y2={200} color="var(--color-primary)" />
            <Connection x1={300} y1={100} x2={500} y2={150} color="var(--color-secondary)" />
            <Connection x1={300} y1={200} x2={500} y2={150} color="var(--color-secondary)" />

            {/* Nodes */}
            <Node cx={100} cy={150} label="CLIENT" color="var(--color-accent)" delay={0} />
            <Node cx={300} cy={100} label="API_GATEWAY" color="var(--color-primary)" delay={0.2} />
            <Node cx={300} cy={200} label="AUTH_SERVICE" color="var(--color-primary)" delay={0.3} />
            <Node cx={500} cy={150} label="NEURAL_CORE" color="var(--color-secondary)" delay={0.5} />
        </svg>
    );
}
