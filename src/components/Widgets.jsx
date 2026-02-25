import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Widgets() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const TECH_STACK = ['Python', 'SQL', 'Azure', 'Databricks', 'Snowflake', 'AWS', 'Docker', 'Kubernetes', 'Power BI', 'Tableau', 'Microsoft Fabrics', 'GCP', 'AntiGravity'];

    const [prices, setPrices] = useState({
        BTC: { price: 68114.00, isLive: false, symbol: 'bitcoin' },
        ETH: { price: 1976.64, isLive: false, symbol: 'ethereum' },
        USDT: { price: 1.00, isLive: false, symbol: 'tether' },
        XRP: { price: 0.54, isLive: false, symbol: 'xrp' },
        BNB: { price: 380.20, isLive: false, symbol: 'binancecoin' },
        USDC: { price: 1.00, isLive: false, symbol: 'usd-coin' },
        SOL: { price: 88.50, isLive: false, symbol: 'solana' },
    });

    useEffect(() => {
        const fetchCrypto = async () => {
            try {
                const ids = Object.values(prices).map(p => p.symbol).join(',');
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
                const data = await response.json();

                setPrices(prev => {
                    const next = { ...prev };
                    Object.keys(next).forEach(key => {
                        const id = next[key].symbol;
                        if (data[id]) {
                            next[key] = { ...next[key], price: data[id].usd, isLive: true };
                        }
                    });
                    return next;
                });
            } catch (err) {
                console.warn('Crypto API failed, using simulation');
            }
        };

        fetchCrypto();
        const apiInterval = setInterval(fetchCrypto, 60000);

        const simulationInterval = setInterval(() => {
            setPrices(prev => {
                const next = { ...prev };
                Object.keys(next).forEach(key => {
                    // Only fluctuate if not live or just for visual flair
                    const fluctuation = (Math.random() - 0.5) * 0.02;
                    next[key].price += fluctuation;
                });
                return next;
            });
        }, 3000);

        return () => {
            clearInterval(apiInterval);
            clearInterval(simulationInterval);
        };
    }, []);

    return (
        <div className="widgets-container">
            {/* Clock Widget */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="widget clock-widget"
            >
                <div className="widget-label">Current Time</div>
                <div className="clock-time">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="clock-date">
                    {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
            </motion.div>

            {/* Tech Stack Widget */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="widget tech-widget"
            >
                <div className="widget-label">Tech Stack</div>
                <div className="tech-tags">
                    {TECH_STACK.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </motion.div>

            {/* Market Widget */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="widget market-widget"
            >
                <div className="widget-label">Market Tracker</div>
                <div className="market-list">
                    {Object.entries(prices).map(([symbol, data]) => (
                        <div key={symbol} className="market-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span className="market-symbol">{symbol}</span>
                                {data.isLive && <span title="Live Data" style={{ width: '4px', height: '4px', background: '#34C759', borderRadius: '50%' }}></span>}
                            </div>
                            <span className="market-price">
                                ${data.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* GitHub Style Contribution Widget (Mock) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="widget github-widget"
            >
                <div className="widget-label">Contribution Graph</div>
                <div className="github-mock-grid">
                    {[...Array(28)].map((_, i) => (
                        <div
                            key={i}
                            className="github-cell"
                            style={{
                                opacity: Math.random() > 0.5 ? 1 : 0.3,
                                background: Math.random() > 0.7 ? '#30D158' : '#1c1c1e'
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
