import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeepReachModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        style={{
                            width: '90%',
                            maxWidth: '500px',
                            background: 'var(--color-frame-bg)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            position: 'relative',
                            zIndex: 101,
                            boxShadow: '0 0 20px rgba(0, 243, 255, 0.15)',
                            overflow: 'hidden' // Prevents content spill causing border issues
                        }}
                    >
                        <div style={{ position: 'absolute', top: '10px', right: '15px', color: 'var(--color-text-dim)', cursor: 'pointer', fontSize: '1.5rem' }} onClick={onClose}>×</div>

                        <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Information</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <a href="mailto:subhanshahid1501@gmail.com" className="contact-link">
                                <span style={{ color: 'var(--color-primary)' }}>EMAIL:</span> subhanshahid1501@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/subhan-shahid-13370328a/" target="_blank" className="contact-link">
                                <span style={{ color: 'var(--color-secondary)' }}>LINKEDIN:</span> /in/subhan-shahid
                            </a>
                            <a href="https://github.com/Subhans1501" target="_blank" className="contact-link">
                                <span style={{ color: '#fff' }}>GITHUB:</span> @Subhans1501
                            </a>
                        </div>

                        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-dim)', fontFamily: 'var(--font-mono)' }}>
                            Available for new opportunities
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
