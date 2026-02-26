import React, { useState, useCallback, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import Window from './components/Window';
import Resume from './components/Resume';
import Projects from './components/Projects';
import TerminalApp from './components/TerminalApp';
import About from './components/About';
import Widgets from './components/Widgets';
import MobileLockScreen from './components/MobileLockScreen';
import HelpGuide from './components/HelpGuide';
import './App.css';

function App() {
    const [openApps, setOpenApps] = useState([]);
    const [focusedApp, setFocusedApp] = useState(null);
    const [theme, setTheme] = useState('dark');
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 768) {
                // Only lock automatically if it's a mobile device on load
                // or if specifically requested. For now, we'll keep the auto-lock for mobile.
                setIsLocked(true);
            }
        };
        checkMobile();

        // Listen for large resizes that might indicate switching between desktop/mobile modes
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isLocked) {
                setIsLocked(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getTimeClass = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'morning';
        if (hour >= 12 && hour < 17) return 'day';
        if (hour >= 17 && hour < 21) return 'evening';
        return 'night';
    };

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    const openApp = useCallback((appId) => {
        if (!openApps.find(app => app.id === appId)) {
            const newApp = {
                id: appId,
                title: appId.charAt(0).toUpperCase() + appId.slice(1)
            };
            setOpenApps([...openApps, newApp]);
        }
        setFocusedApp(appId);
    }, [openApps]);

    const closeApp = useCallback((appId) => {
        setOpenApps(openApps.filter(app => app.id !== appId));
        if (focusedApp === appId) {
            setFocusedApp(openApps.length > 1 ? openApps[openApps.length - 2].id : null);
        }
    }, [openApps, focusedApp]);

    const closeAllApps = useCallback(() => {
        setOpenApps([]);
        setFocusedApp(null);
    }, []);

    const minimizeAllApps = useCallback(() => {
        // In this implementation, "minimize" is handled by the Window component's state/animation.
        // For a global minimize, we can just clear the focused app or trigger a global state.
        // For now, closing apps is the most direct way to clean the desktop.
        setFocusedApp(null);
    }, []);

    return (
        <div className={`desktop ${getTimeClass()}`} data-theme={theme}>
            {isLocked && <MobileLockScreen onUnlock={() => setIsLocked(false)} />}
            <MenuBar
                onToggleTheme={toggleTheme}
                theme={theme}
                onOpenApp={openApp}
                onCloseAll={closeAllApps}
                onMinimizeAll={minimizeAllApps}
            />
            {/* Only show widgets on mobile if no apps are open, or always on desktop */}
            {(!(window.innerWidth < 768 && openApps.length > 0)) && <Widgets />}

            <div className="window-layer">
                {openApps.map((app) => (
                    <Window
                        key={app.id}
                        id={app.id}
                        title={app.title}
                        isFocused={focusedApp === app.id}
                        onFocus={() => setFocusedApp(app.id)}
                        onClose={closeApp}
                    >
                        {app.id === 'resume' && <Resume />}
                        {app.id === 'projects' && <Projects />}
                        {app.id === 'terminal' && <TerminalApp />}
                        {app.id === 'contact' && (
                            <div className="contact-view">
                                <h3>Let's Connect</h3>
                                <p style={{ marginBottom: '16px' }}>I am always open to discussing new opportunities or collaborations.</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div className="project-card" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Email:</span> support@mcbabzsolutions.com
                                    </div>
                                    <div className="project-card" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Phone:</span> +1 (780) 886-5534
                                    </div>
                                    <div className="project-card" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>LinkedIn:</span> <a href="https://www.linkedin.com/in/femi-philip" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>femi-babatunde</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {app.id === 'about' && <About />}
                        {app.id === 'help' && <HelpGuide />}
                    </Window>
                ))}
            </div>

            <Dock onOpenApp={openApp} />
        </div>
    );
}

export default App;
