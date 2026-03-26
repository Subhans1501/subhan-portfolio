import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LiveGraph() {
    const [dataPoints, setDataPoints] = useState([50, 40, 60, 30, 45, 80, 55, 60, 40, 70]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataPoints(prev => {
                const newData = [...prev.slice(1), Math.floor(Math.random() * 60) + 20];
                return newData;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Generate SVG path from data points
    const points = dataPoints.map((val, i) => `${i * 30},${100 - val}`).join(' L ');

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 270 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    d={`M 0,100 L ${points} L 270,100 Z`}
                    fill="url(#grad)"
                    stroke="none"
                    animate={{ d: `M 0,100 L ${points} L 270,100 Z` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                />
                <motion.path
                    d={`M ${points}`}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    animate={{ d: `M ${points}` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                />
            </svg>
            <div style={{ position: 'absolute', top: 5, right: 10, fontSize: '0.7rem', color: 'var(--color-primary)' }}>
                ACTV: {dataPoints[dataPoints.length - 1]}%
            </div>
        </div>
    );
}
