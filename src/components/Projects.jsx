import React from 'react';

const PROJECTS = [
    { name: 'goagentia', description: 'An AI power customer service platform.' },
    { name: 'Cooperative App', description: 'Manage cooperative societies\' record and automate updates.' },
    { name: 'Eventpaddy', description: 'Cofounder of event ticketing platform.' },
    { name: 'Clinic CRM', description: 'Process setup and automation.' },
];

export default function Projects() {
    return (
        <div className="project-grid">
            {PROJECTS.map((p) => (
                <div key={p.name} className="project-card">
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                </div>
            ))}
        </div>
    );
}
