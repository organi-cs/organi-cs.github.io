'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        // Scroll reveal for the pop animation defined in globals.css
        const els = document.querySelectorAll('.pop')
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('v')
                    obs.unobserve(e.target)
                }
            })
        }, { threshold: 0.06 })
        els.forEach(el => obs.observe(el))

        return () => { obs.disconnect() }
    }, [])

    return (
        <div className="page">
            <div className="topbar pop">
                <Link href="/" className="topbar-name">samputhy.kh</Link>
                <ul className="topbar-links">
                    <li><Link href="/" className="topbar-link">home</Link></li>
                </ul>
            </div>

            <div className="section-label pop" style={{ marginTop: '0.5rem' }}>featured</div>
            <div className="card pop" style={{ padding: '2.5rem 2rem', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div className="tape tape-tr" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '20px',
                        background: 'var(--purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 8px 24px rgba(124, 92, 191, 0.4)',
                        transform: 'rotate(-2deg)'
                    }}>
                        <svg width="55" height="55" viewBox="0 0 127.14 96.36" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 109.27 109.27 0 0 0-32.09 0A72.37 72.37 0 0 0 42.68 0a105.73 105.73 0 0 0-26.22 8.09C2.04 29.08-1.57 49.6 0.24 69.83a105.73 105.73 0 0 0 32.29 16.35 77.7 77.7 0 0 0 6.89-11.11 73.53 73.53 0 0 1-11.06-5.26c.93-.7 1.83-1.44 2.68-2.19 21.35 9.8 44.5 9.8 65.46 0 .86.76 1.77 1.5 2.7 2.19a73.34 73.34 0 0 1-11.08 5.26 77.5 77.5 0 0 0 6.89 11.11 105.25 105.25 0 0 0 32.31-16.35c2.14-23.75-3.32-43.55-16.32-61.76zM42.2 56.41c-5.28 0-9.61-4.88-9.61-10.88s4.25-10.88 9.61-10.88c5.42 0 9.68 4.93 9.61 10.88 0 6.01-4.25 10.88-9.61 10.88zm42.74 0c-5.28 0-9.61-4.88-9.61-10.88s4.25-10.88 9.61-10.88c5.42 0 9.68 4.93 9.61 10.88 0 6.01-4.2 10.88-9.61 10.88z" />
                        </svg>
                    </div>
                    <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                            <h3 className="project-name" style={{ fontSize: '1.6rem', margin: 0 }}>Invite my Discord Bot!</h3>
                            <span className="project-status status-live" style={{ fontSize: '0.55rem' }}>live</span>
                        </div>
                        <p className="project-desc" style={{ marginBottom: '1.2rem', maxWidth: '550px', fontSize: '0.9rem' }}>
                            A versatile, custom-built Discord bot featuring minigames, fun commands, AI roasts, and more. Add it directly to your server to give it a try!
                        </p>
                        <div className="project-tags" style={{ marginBottom: '1.2rem' }}>
                            <span className="project-tag">Node.js</span>
                            <span className="project-tag">Discord.js</span>
                            <span className="project-tag">AI / Bots</span>
                        </div>
                        <a
                            href="https://discord.com/oauth2/authorize?client_id=1474592776896253972"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="topbar-link"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                background: 'var(--purple)',
                                color: 'white',
                                borderColor: 'var(--purple)',
                                padding: '0.5rem 1.2rem',
                                fontSize: '0.65rem',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 10px rgba(124, 92, 191, 0.2)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.04em'
                            }}
                        >
                            + add to server
                        </a>
                    </div>
                </div>
            </div>

            <div className="section-label pop" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>toy projects & tools</div>
            <div className="project-grid">
                {/* Registration System */}
                <div className="project-card card pop">
                    <div className="project-bar project-bar-4" />
                    <div className="project-body">
                        <div className="project-top">
                            <h3 className="project-name">Event Registration Portal</h3>
                            <span className="project-status status-done">done</span>
                        </div>
                        <p className="project-sub">CSLC / Internal Tool</p>
                        <p className="project-desc">A custom registration system I built to handle the influx of 200+ students signing up for the CSLC Math Warriors prep sessions without crashing.</p>
                        <div className="project-tags">
                            <span className="project-tag">React</span>
                            <span className="project-tag">Firebase</span>
                        </div>
                        <br />
                        <a href="https://github.com/organi-cs" target="_blank" rel="noopener noreferrer" className="project-link">view on github</a>
                    </div>
                </div>

                {/* Certificate Generator */}
                <div className="project-card card pop">
                    <div className="project-bar project-bar-2" />
                    <div className="project-body">
                        <div className="project-top">
                            <h3 className="project-name">Auto-Cert</h3>
                            <span className="project-status status-done">done</span>
                        </div>
                        <p className="project-sub">Python Automation</p>
                        <p className="project-desc">A small Python script that takes a CSV list of names and automatically generates and emails PDF certificates for olympiad participants.</p>
                        <div className="project-tags">
                            <span className="project-tag">Python</span>
                            <span className="project-tag">Pillow</span>
                            <span className="project-tag">SMTP</span>
                        </div>
                        <br />
                        <a href="https://github.com/organi-cs" target="_blank" rel="noopener noreferrer" className="project-link">view on github</a>
                    </div>
                </div>

                {/* LaTeX Formatter */}
                <div className="project-card card pop">
                    <div className="project-bar project-bar-1" />
                    <div className="project-body">
                        <div className="project-top">
                            <h3 className="project-name">LaTeX to JSON</h3>
                            <span className="project-status status-wip">wip</span>
                        </div>
                        <p className="project-sub">Math Problem Formatter</p>
                        <p className="project-desc">A CLI tool I use to quickly convert raw LaTeX math competition problems into a structured JSON format for web display.</p>
                        <div className="project-tags">
                            <span className="project-tag">Node.js</span>
                            <span className="project-tag">Regex</span>
                            <span className="project-tag">CLI</span>
                        </div>
                        <br />
                        <a href="https://github.com/organi-cs" target="_blank" rel="noopener noreferrer" className="project-link">view on github</a>
                    </div>
                </div>
            </div>

            <div className="section-label pop" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>other projects</div>
            <div className="card quote-card pop" style={{ padding: '2rem', marginBottom: '1.3rem' }}>
                <p style={{ color: 'var(--ink-light)', textAlign: 'center' }}>I'm migrating the rest of my projects here. Stay tuned!</p>
            </div>

            <Link href="/" className="blog-cta">← back to home</Link>
        </div>
    )
}
