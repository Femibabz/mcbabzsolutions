import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';

export default function Window({ id, title, children, onClose, onMinimize, isFocused, onFocus }) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.3, opacity: 0, y: 400 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
                scale: 0.1,
                opacity: 0,
                y: 500,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className={`window ${isFocused ? 'focused' : ''}`}
            style={{ zIndex: isFocused ? 100 : 10 }}
            onMouseDown={onFocus}
        >
            <div className="window-header">
                <div className="window-controls">
                    <button className="control close" onClick={() => onClose(id)}><X size={10} /></button>
                    <button className="control minimize" onClick={() => onMinimize(id)}><Minus size={10} /></button>
                    <button className="control maximize"><Maximize2 size={10} /></button>
                </div>
                <div className="window-title">{title}</div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </motion.div>
    );
}
