import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Background3D from './components/Background3D';
import HudFrame from './components/HudFrame';
import NavBar from './components/NavBar';
import Terminal from './components/Terminal';
import Metrics from './components/Metrics';
import DeepReachModal from './components/DeepReachModal';
import DeepReachFooter from './components/DeepReachFooter';
import LiveGraph from './components/LiveGraph';

// Pages
import Work from './pages/Work';
import Systems from './pages/Systems';

function DashboardLayout({ onDeepReach }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Responsive: Check window size initially or auto-collapse on small screens
  // For now, simple toggle
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-overlay">
      <NavBar onDeepReach={onDeepReach} onMenuClick={toggleSidebar} />

      <div className="main-content-area" style={{ overflowY: 'auto' }}>
        {/* Left Column: Fixed Widgets (Collapsible) */}
        {sidebarOpen && (
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
        )}

        {/* Right Area: Dynamic Content via Router */}
        <div className="right-area" style={{ marginLeft: sidebarOpen ? '0' : '0', transition: 'all 0.3s' }}>
          {/* Decorative Graph Box */}
          <div className="glass-panel graph-box" style={{ width: '300px', marginLeft: 'auto', marginBottom: '2rem', height: '100px', padding: '0' }}>
            <div className="panel-header" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 5, marginBottom: '0' }}>Live Activity</div>
            <LiveGraph />
          </div>

          {/* Stacked Layout for "Longer" Feel */}
          <div id="work-section">
            <Work />
          </div>

          <div id="systems-section" style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px dashed rgba(0, 243, 255, 0.2)' }}>
            <Systems />
          </div>

          {/* Deep Reach Footer */}
          <div id="deep-reach-section" style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px dashed rgba(0, 243, 255, 0.2)' }}>
            <DeepReachFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showDeepReach, setShowDeepReach] = useState(false);

  return (
    <BrowserRouter>
      {/* Visual Layer */}
      <Background3D />

      {/* Overlays */}
      <DeepReachModal isOpen={showDeepReach} onClose={() => setShowDeepReach(false)} />

      <Routes>
        <Route path="/" element={<DashboardLayout onDeepReach={() => setShowDeepReach(true)} />}>
          <Route index element={<Work />} />
          <Route path="systems" element={<Systems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
