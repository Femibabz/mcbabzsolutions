import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ChevronUp } from 'lucide-react';

export default function MobileLockScreen({ onUnlock }) {
    const [time, setTime] = useState(new Date());
    const [unlocked, setUnlocked] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleUnlock = () => {
        setUnlocked(true);
        setTimeout(onUnlock, 500);
    };

    return (
        <AnimatePresence>
            {!unlocked && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } }}
                    className="mobile-lock-screen"
                >
                    <div className="status-bar">
                        <span>No Service</span>
                        <div className="status-icons">
                            <Lock size={14} />
                        </div>
                    </div>

                    <div className="lock-content">
                        <div className="lock-time">
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </div>
                        <div className="lock-date">
                            {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                        </div>
                    </div>

                    <motion.div
                        className="unlock-prompt"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        onClick={handleUnlock}
                    >
                        <ChevronUp size={24} />
                        <span>Swipe up to open</span>
                    </motion.div>

                    <div className="bottom-shortcuts">
                        <div className="shortcut-btn">🔦</div>
                        <div className="shortcut-btn">📷</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
