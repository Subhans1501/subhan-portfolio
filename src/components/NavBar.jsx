
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({ onDeepReach, onMenuClick }) {
    return (
        <div className="nav-bar">
            <div className="menu-icon" onClick={onMenuClick} style={{ cursor: 'pointer' }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="nav-links">
                {/* Links removed per user request for single-page focus */}
            </div>
            <div className="nav-actions">
                <button className="hollow-btn deep-reach-btn" onClick={onDeepReach}>
                    DEEP REACH
                </button>
            </div>
        </div>
    );
}
