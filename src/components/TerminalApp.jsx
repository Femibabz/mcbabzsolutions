import React, { useState, useRef, useEffect } from 'react';

const SKILLS_BY_CATEGORY = [
    {
        category: 'Architecture',
        items: ['Medallion', 'Data Lakehouse', 'Delta Lake', 'Dimensional Modeling', 'Microsoft Fabric', 'Databricks', 'Snowflake']
    },
    {
        category: 'Engineering',
        items: ['Python', 'SQL', 'Java', 'C++', 'VBA', 'ADF', 'SSIS', 'Apache Beam']
    },
    {
        category: 'Cloud & Ops',
        items: ['Azure', 'AWS', 'GCP', 'Airflow', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
        category: 'ML & Analytics',
        items: ['NLP', 'Predictive Modeling', 'M-Learning', 'Power BI', 'Tableau', 'Seaborn']
    }
];

const SkillsDisplay = () => (
    <div style={{ marginTop: '8px' }}>
        {SKILLS_BY_CATEGORY.map(cat => (
            <div key={cat.category} style={{ marginBottom: '8px' }}>
                <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>{cat.category}:</div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                    gap: '4px',
                    paddingLeft: '12px'
                }}>
                    {cat.items.map(s => <span key={s} style={{ fontSize: '12px' }}>{s}</span>)}
                </div>
            </div>
        ))}
    </div>
);

export default function TerminalApp() {
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to MSI Terminal v2.0.0' },
        { type: 'output', content: "Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = null;

        switch (cleanCmd) {
            case 'help':
                response = 'Available commands: help, ls, cat, whoami, date, clear, reboot';
                break;
            case 'ls':
                response = 'about.txt  resume.pdf  projects/  skills/';
                break;
            case 'ls skills':
                response = <SkillsDisplay />;
                break;
            case 'cat about.txt':
                response = 'I am a data enthusiast with more than 5 years of experience in Data Engineering...';
                break;
            case 'whoami':
                response = 'femi_babatunde';
                break;
            case 'date':
                response = new Date().toString();
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'reboot':
                window.location.reload();
                return;
            default:
                if (cleanCmd.startsWith('ls ')) {
                    const target = cleanCmd.split(' ')[1];
                    if (target === 'skills') response = <SkillsDisplay />;
                    else response = `ls: ${target}: No such file or directory`;
                } else if (cmd) {
                    response = `command not found: ${cmd}`;
                }
        }

        if (response) {
            setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: response }]);
        } else if (cmd) {
            setHistory(prev => [...prev, { type: 'input', content: cmd }]);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="terminal-box"
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            style={{ height: '100%', overflowY: 'auto' }}>
            {history.map((line, i) => (
                <div key={i} className="terminal-line" style={{ marginBottom: line.type === 'input' ? '4px' : '12px' }}>
                    {line.type === 'input' && <span className="terminal-prompt">femi@msi-desktop ~ % </span>}
                    <div style={{ whiteSpace: 'pre-wrap' }}>{line.content}</div>
                </div>
            ))}
            <div className="terminal-line">
                <span className="terminal-prompt">femi@msi-desktop ~ % </span>
                <input
                    ref={inputRef}
                    type="text"
                    className="terminal-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    autoFocus
                    spellCheck="false"
                />
                <span className="cursor">▊</span>
            </div>
        </div>
    );
}
