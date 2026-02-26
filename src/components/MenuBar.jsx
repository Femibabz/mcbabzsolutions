import React, { useState, useEffect, useRef } from 'react';
import { Apple, Wifi, Battery, Search, Command, Sun, Moon, ExternalLink, RefreshCw } from 'lucide-react';

export default function MenuBar({ onToggleTheme, theme, onOpenApp, onCloseAll, onMinimizeAll }) {
    const [date, setDate] = useState(new Date());
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            clearInterval(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menus = {
        apple: [
            { label: 'About M.S.I - Data Solutions', action: () => onOpenApp('about') },
            { type: 'divider' },
            { label: 'System Settings...', action: onToggleTheme },
            { label: 'App Store...', action: () => window.open('https://github.com/Femibabz', '_blank') },
            { type: 'divider' },
            { label: 'Restart...', action: () => window.location.reload() },
            { label: 'Shut Down...', action: () => window.close() },
        ],
        finder: [
            { label: 'Search Resume', action: () => onOpenApp('resume') },
            { type: 'divider' },
            { label: 'Preferences...', action: () => { } },
            { label: 'Empty Trash', action: () => { } },
        ],
        file: [
            { label: 'About Me', action: () => onOpenApp('about') },
            { label: 'Resume', action: () => onOpenApp('resume') },
            { label: 'Projects', action: () => onOpenApp('projects') },
            { label: 'Skills', action: () => onOpenApp('terminal') },
            { label: 'Contact', action: () => onOpenApp('contact') },
            { type: 'divider' },
            { label: 'Close Window', action: () => onCloseAll() },
        ],
        edit: [
            { label: 'Undo', action: () => { }, shortcut: '⌘Z' },
            { label: 'Redo', action: () => { }, shortcut: '⇧⌘Z' },
            { type: 'divider' },
            {
                label: 'Copy Profile Link', action: () => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                }
            },
            { label: 'Select All', action: () => document.execCommand('selectAll'), shortcut: '⌘A' },
            { type: 'divider' },
            { label: 'Clear Terminal', action: () => onOpenApp('terminal') },
        ],
        window: [
            { label: 'Minimize All', action: onMinimizeAll, shortcut: '⌘M' },
            { label: 'Close All Windows', action: onCloseAll, shortcut: '⇧⌘W' },
            { type: 'divider' },
            { label: 'Bring All to Front', action: () => { } },
        ]
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleExternalRedirect = (url) => {
        window.open(url, '_blank');
        setActiveMenu(null);
    };

    const DropdownMenu = ({ items }) => (
        <div className="menu-dropdown">
            {items.map((item, i) => (
                item.type === 'divider' ? (
                    <div key={i} className="dropdown-divider" />
                ) : (
                    <div key={i} className="dropdown-item" onClick={() => { item.action(); setActiveMenu(null); }}>
                        <span>{item.label}</span>
                        {item.shortcut && <span style={{ opacity: 0.5, fontSize: '11px' }}>{item.shortcut}</span>}
                    </div>
                )
            ))}
        </div>
    );

    return (
        <div className="menu-bar" ref={menuRef}>
            <div className="menu-bar-left">
                <div className="menu-item-container">
                    <div
                        className={`menu-item apple-icon ${activeMenu === 'apple' ? 'active' : ''}`}
                        onClick={() => handleMenuClick('apple')}
                    >
                        <Apple size={18} />
                    </div>
                    {activeMenu === 'apple' && <DropdownMenu items={menus.apple} />}
                </div>

                <div className="menu-item-container">
                    <span className={`menu-item font-bold ${activeMenu === 'finder' ? 'active' : ''}`} onClick={() => handleMenuClick('finder')}>Finder</span>
                    {activeMenu === 'finder' && <DropdownMenu items={menus.finder} />}
                </div>

                <div className="menu-item-container">
                    <span className={`menu-item ${activeMenu === 'file' ? 'active' : ''}`} onClick={() => handleMenuClick('file')}>File</span>
                    {activeMenu === 'file' && <DropdownMenu items={menus.file} />}
                </div>

                <div className="menu-item-container">
                    <span className={`menu-item ${activeMenu === 'edit' ? 'active' : ''}`} onClick={() => handleMenuClick('edit')}>Edit</span>
                    {activeMenu === 'edit' && <DropdownMenu items={menus.edit} />}
                </div>

                <span className="menu-item" onClick={() => handleExternalRedirect('https://github.com/Femibabz')}>View</span>
                <span className="menu-item" onClick={() => handleExternalRedirect('https://www.linkedin.com/in/femi-philip')}>Go</span>

                <div className="menu-item-container">
                    <span className={`menu-item ${activeMenu === 'window' ? 'active' : ''}`} onClick={() => handleMenuClick('window')}>Window</span>
                    {activeMenu === 'window' && <DropdownMenu items={menus.window} />}
                </div>

                <span className="menu-item" onClick={() => onOpenApp('help')}>Help</span>
            </div>

            <div className="menu-bar-right">
                <div className="menu-item"><Wifi size={17} /></div>
                <div className="menu-item"><Battery size={17} /></div>
                <div className="menu-item" onClick={onToggleTheme}>
                    {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
                </div>
                <div className="menu-item"><Search size={17} /></div>
                <div className="menu-item"><Command size={17} /></div>
                <div className="menu-item date-display">
                    {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    {' '}
                    {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                </div>
            </div>
        </div>
    );
}
