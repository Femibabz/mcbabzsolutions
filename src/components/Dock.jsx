import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Folder, Terminal, Mail, Info } from 'lucide-react';

const DOCK_ITEMS = [
    { id: 'resume', icon: FileText, label: 'Resume', gradient: 'linear-gradient(180deg, #5AC8FA 0%, #007AFF 100%)' },
    { id: 'projects', icon: Folder, label: 'Projects', gradient: 'linear-gradient(180deg, #FFD60A 0%, #FF9F0A 100%)' },
    { id: 'terminal', icon: Terminal, label: 'Skills', gradient: 'linear-gradient(180deg, #30D158 0%, #248A3D 100%)' },
    { id: 'contact', icon: Mail, label: 'Contact', gradient: 'linear-gradient(180deg, #FF453A 0%, #C9342B 100%)' },
    { id: 'about', icon: Info, label: 'About', gradient: 'linear-gradient(180deg, #BF5AF2 0%, #8E24AA 100%)' },
];

export default function Dock({ onOpenApp }) {
    return (
        <div className="dock-container">
            <div className="dock">
                {DOCK_ITEMS.map((item) => (
                    <motion.div
                        key={item.id}
                        className="dock-item"
                        whileHover={{ y: -10, scale: 1.2 }}
                        onClick={() => onOpenApp(item.id)}
                        title={item.label}
                    >
                        <div className="dock-icon-wrapper" style={{ background: item.gradient }}>
                            <item.icon size={26} color="white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
                        </div>
                        <div className="dock-dot" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
