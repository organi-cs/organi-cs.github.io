import Nav from '@/components/Nav'
import Panel from '@/components/Panel'
import ExpandableCard from '@/components/ExpandableCard'
import ImageModal from '@/components/ImageModal'
import BlogPopup from '@/components/BlogPopup'
import Link from 'next/link'

// Data
const organizations = [
  {
    id: 'cslc',
    name: 'CAMBODIAN STUDENT LEADERSHIP COUNCIL',
    logo: '/logos/cslc.png',
    role: 'Lead Technician & Head of PR',
    description: 'I run all the tech stuff and handle public communications. That means managing our digital systems, designing promo materials, running social media, and making sure information actually reaches students and partner organizations.',
    highlights: [
      'CSLC Tutoring: Led tutoring sessions for 50+ students over 2 months — 90% of them went on to win medals (bronze to silver)',
      'CSLC Math Warriors: Organized a SIMOC Singapore \'25 prep program — 200 students, 4 training sessions, all the logistics',
      'CSLC Chess Competition: Ran a nationwide tournament with 100+ players across grades 4-12'
    ],
    website: 'https://www.cambodiaslc.org/'
  },
  {
    id: 'ijhs',
    name: 'INTERNATIONAL JUNIOR HONOUR SOCIETY',
    logo: '/logos/ijhs.png',
    role: '5th in Cambodia & Communications Team',
    description: 'Got in for academics, leadership, and community service. Ranked 5th highest IJHS points nationally, then joined the Global Student Leadership Council to do graphic design and visual content for international campaigns.',
    highlights: [
      'Ranked 5th highest IJHS points in Cambodia',
      'Joined GSLC Communications — designed graphics for international campaigns',
      'Helped run YALA Camp in Shenzhen, China — coordinated activities for 171 participants'
    ],
    website: 'https://ijhscommunity.org/'
  },
  {
    id: 'ymo',
    name: 'YOUTH MATHEMATICS ORGANIZATION',
    logo: '/logos/ymo.png',
    role: 'Tech Lead & Senior Tutor',
    description: 'I keep the tech running, tutor students for olympiads, write competition problems, and help organize YMO and PWTMC events. Basically the person who makes sure things don\'t break and students are prepared.',
    highlights: [
      'Tutor 20+ students on advanced olympiad problem-solving',
      'Maintain all technical systems (especially during registration rushes)',
      'Write and review competition problems',
      'Key organizer for YMO and PWTMC events'
    ],
    website: 'https://www.ymocambodia.org/'
  },
  {
    id: 'spark',
    name: 'PHISHBLASTERS / SPARK',
    logo: '/logos/spark.png',
    role: 'Co-Founder & Lead Developer',
    description: 'Co-founded a cybersecurity education platform for ASEAN students. I\'m the only developer — built the whole thing from scratch, manage the product roadmap, and figure out how to get users.',
    highlights: [
      'Built the entire platform solo from zero',
      'Currently serving ~10 monthly active users',
      'Working on a major redesign to improve UX and add new features'
    ],
    website: 'https://redesigned-phishblasters.vercel.app/'
  }
]

const projects = [
  {
    icon: 'DATA',
    title: 'CAMDATA',
    subtitle: 'Cambodian Government Data Dashboard',
    status: 'WIP',
    statusType: 'wip',
    description: 'Cambodia has tons of public data (exchange rates, air quality, stocks) but it\'s scattered across government sites in annoying formats. CamData pulls it all into one dashboard so researchers, journalists, and regular people can actually use it.',
    features: [
      'Live NBC exchange rates and provincial air quality data',
      'Interactive stock market charts',
      'Export to CSV/JSON for your own analysis',
      'Working on: automated data fetching and caching'
    ],
    featureLabel: 'FEATURES',
    tech: ['PYTHON', 'STREAMLIT', 'PLOTLY', 'PANDAS'],
    link: 'https://github.com/organi-cs/camdata',
    solo: true
  },
  {
    icon: 'SEC',
    title: 'PHISHBLASTERS',
    subtitle: 'Cybersecurity Education Platform',
    status: 'WIP',
    statusType: 'wip',
    description: 'Teaching ASEAN students how to not get hacked. Interactive lessons, fake phishing scenarios to practice on, and a progression system to keep people engaged. Built the whole thing myself.',
    features: [
      'Interactive lessons with instant feedback',
      'Realistic phishing simulations (safe to fail)',
      'Learning paths and achievement tracking',
      'Coming soon: user accounts and backend auth'
    ],
    featureLabel: 'FEATURES',
    tech: ['JAVASCRIPT', 'REACT', 'VERCEL'],
    link: 'https://redesigned-phishblasters.vercel.app/',
    solo: false
  },
  {
    icon: 'ML',
    title: 'FIBER ANALYSIS',
    subtitle: 'ML for Forensic Fiber ID',
    status: 'WIP',
    statusType: 'wip',
    description: 'Forensic fiber analysis is usually done manually under a microscope — slow and subjective. I built an ML model that looks at fiber images and classifies them automatically. Faster, more consistent, 95%+ accurate.',
    features: [
      '95%+ accuracy on test data',
      'Collected and labeled my own dataset of fiber samples',
      'OpenCV for image preprocessing',
      'Scikit-Learn for classification'
    ],
    featureLabel: 'RESULTS',
    tech: ['PYTHON', 'OPENCV', 'SCIKIT-LEARN', 'NUMPY'],
    solo: true
  },
  {
    icon: 'VIZ',
    title: 'ALGO SIMULATIONS',
    subtitle: 'Interactive Algorithm Visualizer',
    status: 'PLANNED',
    statusType: 'wip',
    description: 'Algorithms make way more sense when you can see them. Building a tool to visualize sorting, pathfinding, physics, and fractals — partly to learn, partly to help others understand.',
    features: [
      'Sorting visualizer (Merge Sort, Quick Sort, etc.)',
      'Pathfinding (A*, Dijkstra) on interactive grids',
      'Physics simulations and collision detection',
      'Fractal generators to visualize recursion'
    ],
    featureLabel: 'PLANNED',
    tech: ['JAVASCRIPT', 'HTML5 CANVAS'],
    solo: true
  },
  {
    icon: 'BOOK',
    title: 'MATH OLYMPIAD BOOKS',
    subtitle: 'Problem Collection Series',
    status: 'WIP',
    statusType: 'wip',
    description: 'When I started competitive math, good resources in Cambodia were hard to find. So I made my own — two volumes covering algebra, geometry, number theory, and combinatorics with detailed solutions.',
    features: [
      '2 volumes, 500+ pages of problems and solutions',
      'Step-by-step proofs with alternative approaches',
      'Problems selected from past competitions + original ones',
      '300+ copies distributed to schools and math clubs'
    ],
    featureLabel: 'DETAILS',
    solo: true
  }
]

const achievements = [
  {
    name: 'SINGAPORE INTERNATIONAL MATH COMPETITION',
    subtitle: 'World Rank ~8',
    badge: 'GOLD',
    badgeType: 'badge-gold',
    description: 'Competed against students from 30+ countries. Ranked approximately 8th globally out of thousands of participants.'
  },
  {
    name: 'AMERICAN MATHEMATICS OLYMPIAD',
    subtitle: 'National Rank 3',
    badge: 'GOLD',
    badgeType: 'badge-gold',
    description: 'Achieved 3rd place nationally in Cambodia\'s AMO competition. Problems covered advanced algebra, geometry, and combinatorics.'
  },
  {
    name: 'NATIONAL OUTSTANDING STUDENT (MATH)',
    subtitle: 'MoEYS Cambodia',
    badge: 'RANK 3',
    badgeType: 'badge-gold',
    description: 'Recognized by the Ministry of Education, Youth and Sport of Cambodia for excellence in mathematics.'
  },
  {
    name: 'MATH OLYMPIAD BOOK SERIES',
    subtitle: '2 Volumes Published',
    badge: '300+ COPIES',
    badgeType: 'badge-special',
    description: 'Authored and self-published two books of olympiad problems with solutions. Distributed to schools and math clubs across Cambodia.'
  },
  {
    name: 'NATIONAL JUNIOR CYBERSECURITY OLYMPIAD',
    subtitle: 'NUS Singapore',
    badge: 'BRONZE',
    badgeType: 'badge-bronze',
    description: 'Competed in cybersecurity challenges covering cryptography, web security, forensics, and network security.'
  }
]

// Organization Card Component
function OrgCard({ org }) {
  return (
    <ExpandableCard
      icon={org.id.toUpperCase().slice(0, 4)}
      title={org.name}
      subtitle={org.role}
    >
      <div className="detail-section">
        <div className="detail-label">ROLE</div>
        <p className="detail-text" style={{ color: 'var(--accent-blue)', fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          {org.role.toUpperCase()}
        </p>
      </div>
      <div className="detail-section">
        <p className="detail-text">{org.description}</p>
      </div>
      {org.highlights && (
        <div className="detail-section">
          <div className="detail-label">HIGHLIGHTS</div>
          <ul className="detail-list">
            {org.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}
      <a href={org.website} className="link-btn" target="_blank" rel="noopener noreferrer">VISIT WEBSITE</a>
    </ExpandableCard>
  )
}

// Achievement Card Component  
function AchievementCard({ achievement }) {
  return (
    <ExpandableCard
      icon="★"
      title={achievement.name}
      subtitle={achievement.subtitle}
      status={achievement.badge}
      statusType={achievement.badgeType.replace('badge-', '')}
    >
      <p className="detail-text">{achievement.description}</p>
    </ExpandableCard>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <BlogPopup />
      
      <div className="container">
        {/* About Section */}
        <section id="about">
          <Panel title="PLAYER INFO">
            <div className="hero-content">
              <ImageModal src="/photo.png" alt="Samputhy Khim">
                <div className="avatar-frame">
                  <img src="/photo.png" alt="Samputhy" className="smooth-render" />
                </div>
              </ImageModal>
              
              <div className="hero-info">
                <h1 className="hero-name">SAMPUTHY KHIM</h1>
                <p className="hero-tagline">Grade 12 @ Westland International School, Cambodia</p>
                <p className="hero-bio">
                  Into data science, ML, and making Cambodian public data less painful to access. 
                  I design posters, tutor kids, and explain why math is cool to people who didn't ask. 
                  In student orgs, I fix things and make things look nice.
                </p>
                <div className="hero-contact">
                  <a href="mailto:wis.chester.08@gmail.com" className="contact-btn">EMAIL</a>
                  <a href="https://github.com/organi-cs" className="contact-btn">GITHUB</a>
                  <a href="https://www.linkedin.com/in/samputhy-khim-a159b1339/" className="contact-btn">LINKEDIN</a>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {/* Organizations */}
        <section id="orgs">
          <Panel title="ORGANIZATIONS">
            {organizations.map(org => (
              <OrgCard key={org.id} org={org} />
            ))}
          </Panel>
        </section>

        {/* Projects */}
        <section id="projects">
          <Panel title="PROJECTS">
            {projects.map((project, i) => (
              <ExpandableCard
                key={i}
                icon={project.icon}
                title={project.title}
                subtitle={project.subtitle}
                status={project.status}
                statusType={project.statusType}
              >
                <div className="detail-section">
                  <div className="detail-label">DESCRIPTION</div>
                  <p className="detail-text">{project.description}</p>
                  {project.solo && (
                    <p className="detail-text" style={{ marginTop: '8px', fontStyle: 'italic', color: '#666' }}>
                      Solo project
                    </p>
                  )}
                </div>
                
                {project.features && (
                  <div className="detail-section">
                    <div className="detail-label">{project.featureLabel || 'FEATURES'}</div>
                    <ul className="detail-list">
                      {project.features.map((f, j) => <li key={j}>{f}</li>)}
                    </ul>
                  </div>
                )}
                
                {project.tech && (
                  <div className="detail-section">
                    <div className="detail-label">TECH STACK</div>
                    <div className="tech-tags">
                      {project.tech.map((t, j) => (
                        <span key={j} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.link && (
                  <a href={project.link} className="link-btn" target="_blank" rel="noopener noreferrer">
                    {project.link.includes('github') ? 'VIEW ON GITHUB' : 'VIEW PROJECT'}
                  </a>
                )}
              </ExpandableCard>
            ))}
          </Panel>
        </section>

        {/* Achievements */}
        <section id="achievements">
          <Panel title="ACHIEVEMENTS">
            {achievements.map((ach, i) => (
              <AchievementCard key={i} achievement={ach} />
            ))}
          </Panel>
        </section>

        {/* Files */}
        <section id="files">
          <Panel title="FILES / DOWNLOADS">
            <div className="files-grid">
              <a href="/files/cv.pdf" className="file-item" download>
                <div className="file-icon">
                  <span className="file-icon-text">DOC</span>
                </div>
                <div className="file-name">MY CV</div>
                <div className="file-size">Resume / Curriculum Vitae</div>
                <span className="file-type">PDF</span>
              </a>
              
              <a href="/files/photos.zip" className="file-item" download>
                <div className="file-icon">
                  <span className="file-icon-text">IMG</span>
                </div>
                <div className="file-name">PHOTOS</div>
                <div className="file-size">Events & Activities</div>
                <span className="file-type">ZIP</span>
              </a>
            </div>
          </Panel>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-quote">"Slowly building things, one commit at a time."</p>
          <p className="footer-text">SAMPUTHY // CAMBODIA // 2025</p>
        </footer>
      </div>
    </>
  )
}