import React from 'react';
import { MousePointer, Terminal, Layout, Smartphone, ShieldCheck } from 'lucide-react';

export default function HelpGuide() {
    return (
        <div className="help-guide">
            <section className="resume-section">
                <h2 className="resume-header">WHAT THIS WEBSITE CAPTURES</h2>
                <div style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <ShieldCheck size={20} color="#34C759" />
                        <span style={{ fontWeight: 'bold' }}>Privacy Summary</span>
                    </div>
                    <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', opacity: 0.9 }}>
                        <li>**Professional Identity**: Captures my journey as a Data Engineer/Analytics Specialist.</li>
                        <li>**Technical Stack**: Showcases mastery in Power BI, Tableau, Microsoft Fabric, GCP, and more.</li>
                        <li>**Project Portfolio**: Displays key architectural and engineering contributions.</li>
                        <li>**Contact Information**: Provides direct channels to reach me (Email, LinkedIn).</li>
                        <li>**User Preferences**: Only temporarily stores your theme (Light/Dark) preference for the duration of the session.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section" style={{ marginTop: '30px' }}>
                <h2 className="resume-header">HOW TO USE THIS WEBSITE</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <MousePointer className="text-accent" size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Navigation</div>
                            <p style={{ opacity: 0.8, fontSize: '14px' }}>Use the **Dock** at the bottom to open applications. Click on the **Top Menu Bar** items to access deeper settings, redirects, and system actions.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Terminal className="text-accent" size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Interactive Shell</div>
                            <p style={{ opacity: 0.8, fontSize: '14px' }}>Open the **Skills** app to use the CLI. Try typing `help`, `ls`, or `whoami` to interact with the system.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Layout className="text-accent" size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Window Management</div>
                            <p style={{ opacity: 0.8, fontSize: '14px' }}>Windows are draggable and resizable. Use the top-left icons to close, minimize (Genie effect), or maximize. You can also use the **Window** menu to Close All or Minimize All.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Smartphone className="text-accent" size={24} />
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Mobile Experience</div>
                            <p style={{ opacity: 0.8, fontSize: '14px' }}>On mobile, you'll see an **iOS-style Lock Screen**. Swipe up (or click the arrow) to unlock and enter the desktop view.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
