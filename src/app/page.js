'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ── Expandable project details ── */
function ProjectDetails({ id, children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`project-details ${open ? 'open' : ''}`} id={id}>
        {children}
      </div>
      <button
        className="project-toggle"
        onClick={() => setOpen(!open)}
      >
        {open ? '- show less' : '+ show more'}
      </button>
    </>
  )
}

/* ── Org logo with fallback ── */
function OrgLogo({ src, alt, fallback }) {
  const [err, setErr] = useState(false)
  if (err) return <div className="org-logo"><span className="org-logo-text">{fallback}</span></div>
  return (
    <div className="org-logo">
      <img src={src} alt={alt} onError={() => setErr(true)} />
    </div>
  )
}

/* ── Org expandable highlights ── */
function OrgDetails({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`project-details ${open ? 'open' : ''}`}>
        <div className="project-detail-label">Highlights</div>
        {children}
      </div>
      <button className="project-toggle" onClick={() => setOpen(!open)}>
        {open ? '- less' : '+ highlights'}
      </button>
    </>
  )
}

/* ── Avatar with fallback ── */
function Avatar() {
  const [err, setErr] = useState(false)
  if (err) return <div className="avatar-frame"><div className="avatar-placeholder">SK</div></div>
  return (
    <div className="avatar-frame">
      <img src="/photo.png" alt="Samputhy Khim" onError={() => setErr(true)} />
    </div>
  )
}

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    // Scroll reveal
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
    <div className="page" ref={pageRef}>

      {/* NAV */}
      <div className="topbar pop">
        <Link href="/" className="topbar-name">samputhy.kh</Link>
        <ul className="topbar-links">
          <li><a href="#orgs" className="topbar-link">orgs</a></li>
          <li><a href="#projects" className="topbar-link">projects</a></li>
          <li><a href="#achievements" className="topbar-link">achievements</a></li>
          <li><Link href="/blog" className="topbar-link">blog</Link></li>
          <li><a href="https://github.com/organi-cs" target="_blank" rel="noopener" className="topbar-link">github</a></li>
        </ul>
      </div>

      {/* HERO */}
      <div className="hero-card card pop">
        <div className="tape tape-tr" />
        <div className="hero-top">
          <Avatar />
          <div className="hero-info">
            <div className="hero-stamp">Student Developer</div>
            <h1 className="hero-name">Samputhy <span className="hl">Khim</span></h1>
            <p className="hero-tagline">Student from Cambodia</p>
            <p className="hero-bio">
              Into <strong>data science</strong>, <strong>ML</strong>, and making Cambodian public data less painful to access.
              I design posters, tutor kids, and explain why math is cool to people who didn&apos;t ask.
              In student orgs, I fix things and make things look nice.
            </p>
            <div className="hero-links">
              <a href="mailto:wis.chester.08@gmail.com" className="hero-link">email</a>
              <a href="https://github.com/organi-cs" target="_blank" rel="noopener" className="hero-link">github</a>
              <a href="https://www.linkedin.com/in/samputhy-khim-a159b1339/" target="_blank" rel="noopener" className="hero-link">linkedin</a>
            </div>
            <div className="hero-scribble">~ slowly building things, one commit at a time</div>
          </div>
        </div>
      </div>

      {/* ORGANIZATIONS */}
      <div className="section-label pop" id="orgs">organizations</div>
      <div className="org-grid">
        <div className="org-card card pop">
          <OrgLogo src="/logos/cslc.png" alt="CSLC" fallback="CSLC" />
          <div className="org-name">Cambodian Student Leadership Council</div>
          <div className="org-role">lead technician &amp; head of PR</div>
          <p className="org-desc">I run all the tech stuff and handle public communications — managing digital systems, designing promo materials, and running social media.</p>
          <OrgDetails>
            <ul className="project-detail-list">
              <li>CSLC Tutoring: Led sessions for 50+ students — 90% went on to win medals</li>
              <li>CSLC Math Warriors: Organized SIMOC Singapore &apos;25 prep — 200 students, 4 sessions</li>
              <li>CSLC Chess Competition: Ran a nationwide tournament, 100+ players across grades 4-12</li>
            </ul>
          </OrgDetails>
          <span className="org-sep">|</span>
          <a href="https://www.cambodiaslc.org/" target="_blank" rel="noopener" className="project-link">website</a>
        </div>
        <div className="org-card card pop">
          <OrgLogo src="/logos/ijhs.png" alt="IJHS" fallback="IJHS" />
          <div className="org-name">International Junior Honour Society</div>
          <div className="org-role">5th in Cambodia &amp; communications team</div>
          <p className="org-desc">Ranked 5th highest IJHS points nationally. Joined the Global Student Leadership Council for graphic design and visual content for international campaigns.</p>
          <OrgDetails>
            <ul className="project-detail-list">
              <li>Ranked 5th highest IJHS points in Cambodia</li>
              <li>GSLC Communications — designed graphics for international campaigns</li>
              <li>Helped run YALA Camp in Shenzhen, China — 171 participants</li>
            </ul>
          </OrgDetails>
          <span className="org-sep">|</span>
          <a href="https://ijhscommunity.org/" target="_blank" rel="noopener" className="project-link">website</a>
        </div>
        <div className="org-card card pop">
          <OrgLogo src="/logos/ymo.png" alt="YMO" fallback="YMO" />
          <div className="org-name">Youth Mathematics Organization</div>
          <div className="org-role">tech lead &amp; senior tutor</div>
          <p className="org-desc">I keep the tech running, tutor students for olympiads, write competition problems, and help organize YMO and PWTMC events.</p>
          <OrgDetails>
            <ul className="project-detail-list">
              <li>Tutor 20+ students on advanced olympiad problem-solving</li>
              <li>Maintain all technical systems (especially during registration rushes)</li>
              <li>Write and review competition problems</li>
              <li>Key organizer for YMO and PWTMC events</li>
            </ul>
          </OrgDetails>
          <span className="org-sep">|</span>
          <a href="https://www.ymocambodia.org/" target="_blank" rel="noopener" className="project-link">website</a>
        </div>
        <div className="org-card card pop">
          <OrgLogo src="/logos/spark.png" alt="SPARK" fallback="SPARK" />
          <div className="org-name">PhishBlasters / Spark</div>
          <div className="org-role">co-founder &amp; lead developer</div>
          <p className="org-desc">Co-founded a cybersecurity education platform for ASEAN students. I&apos;m the only developer — built the whole thing from scratch.</p>
          <OrgDetails>
            <ul className="project-detail-list">
              <li>Built the entire platform solo from zero</li>
              <li>Currently serving ~10 monthly active users</li>
              <li>Working on a major redesign to improve UX</li>
            </ul>
          </OrgDetails>
          <span className="org-sep">|</span>
          <a href="https://redesigned-phishblasters.vercel.app/" target="_blank" rel="noopener" className="project-link">website</a>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section-label pop" id="projects">projects</div>
      <div className="project-grid">

        {/* CamData */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-6" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">GraphOS</h3>
              <span className="project-status status-live">live</span>
            </div>
            <p className="project-sub">Premium ATAR Math Graph Tool</p>
            <p className="project-desc">GraphOS is a premium tool for ATAR Mathematics Applications. Build graphs, analyze connectivity, and solve network flow problems directly in the browser.</p>
            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">Math</span>
              <span className="project-tag">Graph Theory</span>
            </div>
            <br />
            <a href="https://organi-cs.github.io/atar-graph-sim/" target="_blank" rel="noopener" className="project-link">live tool</a>
          </div>
        </div>

        {/* CamData */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-1" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">CamData</h3>
              <span className="project-status status-wip">wip</span>
            </div>
            <p className="project-sub">Cambodian Government Data Dashboard</p>
            <p className="project-desc">Cambodia has tons of public data but it&apos;s scattered across government sites in annoying formats. CamData pulls it all into one dashboard so people can actually use it.</p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">Streamlit</span>
              <span className="project-tag">Plotly</span>
              <span className="project-tag">Pandas</span>
            </div>
            <ProjectDetails id="det-camdata">
              <div className="project-detail-label">Features</div>
              <ul className="project-detail-list">
                <li>Live NBC exchange rates and provincial air quality data</li>
                <li>Interactive stock market charts</li>
                <li>Export to CSV/JSON for your own analysis</li>
                <li>Working on: automated data fetching and caching</li>
              </ul>
            </ProjectDetails>
            <span className="project-solo">solo project</span>
            <br />
            <a href="https://github.com/organi-cs/camdata" target="_blank" rel="noopener" className="project-link">view on github</a>
          </div>
        </div>

        {/* PhishBlasters */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-2" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">PhishBlasters</h3>
              <span className="project-status status-wip">wip</span>
            </div>
            <p className="project-sub">Cybersecurity Education Platform</p>
            <p className="project-desc">Teaching ASEAN students how to not get hacked. Interactive lessons, fake phishing scenarios to practice on, and a progression system to keep people engaged.</p>
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">React</span>
              <span className="project-tag">Vercel</span>
            </div>
            <ProjectDetails id="det-phish">
              <div className="project-detail-label">Features</div>
              <ul className="project-detail-list">
                <li>Interactive lessons with instant feedback</li>
                <li>Realistic phishing simulations (safe to fail)</li>
                <li>Learning paths and achievement tracking</li>
                <li>Coming soon: user accounts and backend auth</li>
              </ul>
            </ProjectDetails>
            <br />
            <a href="https://redesigned-phishblasters.vercel.app/" target="_blank" rel="noopener" className="project-link">live site</a>
          </div>
        </div>

        {/* Fiber Analysis */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-3" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">Fiber Analysis</h3>
              <span className="project-status status-wip">wip</span>
            </div>
            <p className="project-sub">ML for Forensic Fiber ID</p>
            <p className="project-desc">Forensic fiber analysis is usually done manually under a microscope — slow and subjective. I built an ML model that classifies them automatically. Faster, more consistent, 95%+ accurate.</p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">OpenCV</span>
              <span className="project-tag">Scikit-learn</span>
              <span className="project-tag">NumPy</span>
            </div>
            <ProjectDetails id="det-fiber">
              <div className="project-detail-label">Results</div>
              <ul className="project-detail-list">
                <li>95%+ accuracy on test data</li>
                <li>Collected and labeled my own dataset of fiber samples</li>
                <li>OpenCV for image preprocessing</li>
                <li>Scikit-Learn for classification</li>
              </ul>
            </ProjectDetails>
            <span className="project-solo">solo project</span>
          </div>
        </div>

        {/* Algo Simulations */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-4" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">Algo Simulations</h3>
              <span className="project-status status-soon">planned</span>
            </div>
            <p className="project-sub">Interactive Algorithm Visualizer</p>
            <p className="project-desc">Algorithms make way more sense when you can see them. Building a tool to visualize sorting, pathfinding, physics, and fractals.</p>
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">HTML5 Canvas</span>
            </div>
            <ProjectDetails id="det-algo">
              <div className="project-detail-label">Planned</div>
              <ul className="project-detail-list">
                <li>Sorting visualizer (Merge Sort, Quick Sort, etc.)</li>
                <li>Pathfinding (A*, Dijkstra) on interactive grids</li>
                <li>Physics simulations and collision detection</li>
                <li>Fractal generators to visualize recursion</li>
              </ul>
            </ProjectDetails>
            <span className="project-solo">solo project</span>
          </div>
        </div>

        {/* Math Warriors */}
        <div className="project-card card pop">
          <div className="project-bar project-bar-5" />
          <div className="project-body">
            <div className="project-top">
              <h3 className="project-name">Math Warriors</h3>
              <span className="project-status status-wip">wip</span>
            </div>
            <p className="project-sub">Mental Math Training App</p>
            <p className="project-desc">A web app to help students improve their mental math speed. Built for the CSLC Math Warriors program as part of SIMOC Singapore &apos;25 prep.</p>
            <div className="project-tags">
              <span className="project-tag">JavaScript</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">HTML</span>
            </div>
            <br />
            <a href="https://github.com/organi-cs/math-warriors" target="_blank" rel="noopener" className="project-link">view on github</a>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="section-label pop" id="achievements">achievements</div>
      <div className="achievement-list">
        <div className="ach-card card pop">
          <span className="ach-badge badge-gold">Gold</span>
          <div className="ach-info">
            <div className="ach-name">Singapore International Math Competition</div>
            <div className="ach-sub">World Rank ~8</div>
          </div>
        </div>
        <div className="ach-card card pop">
          <span className="ach-badge badge-gold">Gold</span>
          <div className="ach-info">
            <div className="ach-name">American Mathematics Olympiad</div>
            <div className="ach-sub">National Rank 3</div>
          </div>
        </div>
        <div className="ach-card card pop">
          <span className="ach-badge badge-gold">Rank 3</span>
          <div className="ach-info">
            <div className="ach-name">National Outstanding Student (Math)</div>
            <div className="ach-sub">MoEYS Cambodia</div>
          </div>
        </div>
        <div className="ach-card card pop">
          <span className="ach-badge badge-special">200+</span>
          <div className="ach-info">
            <div className="ach-name">CSLC Math Warriors Program</div>
            <div className="ach-sub">SIMOC Singapore &apos;25 Prep — 200 students trained</div>
          </div>
        </div>
        <div className="ach-card card pop">
          <span className="ach-badge badge-bronze">Bronze</span>
          <div className="ach-info">
            <div className="ach-name">National Junior Cybersecurity Olympiad</div>
            <div className="ach-sub">NUS Singapore</div>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div className="section-label pop" id="blog">blog</div>
      <div className="blog-card card pop">
        <div className="blog-header">
          <h3>Posts</h3>
          <span className="blog-new">new</span>
        </div>
        <div className="blog-posts">
          <Link href="/blog" className="blog-post">
            <span className="blog-date">coming<br />soon</span>
            <div>
              <div className="blog-post-title">First post loading...</div>
              <div className="blog-post-desc">I started a blog where I write about math, coding, and random thoughts. Stay tuned.</div>
            </div>
          </Link>
        </div>
        <Link href="/blog" className="blog-cta">read all posts</Link>
      </div>

      {/* SPLIT: QUOTE + FILES */}
      <div className="split">
        <div className="card quote-card pop">
          <div className="quote-text">&ldquo;Slowly building things, one commit at a time.&rdquo;</div>
          <div className="quote-attr">— me, honestly</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="/files/cv.pdf" download className="file-card card pop">
            <div className="file-icon file-pdf">PDF</div>
            <div className="file-info">
              <h4>My CV</h4>
              <p>Resume / Curriculum Vitae</p>
            </div>
          </a>
          <a href="/files/photos.zip" download className="file-card card pop">
            <div className="file-icon file-zip">ZIP</div>
            <div className="file-info">
              <h4>Photos</h4>
              <p>Events &amp; Activities</p>
            </div>
          </a>
        </div>
      </div>

      <div className="footer-copy">made with care from cambodia</div>
    </div>
  )
}