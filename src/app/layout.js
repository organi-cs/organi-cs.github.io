import '@/styles/globals.css'

export const metadata = {
  metadataBase: new URL('https://organi-cs.github.io'),
  title: {
    default: 'Samputhy Khim — Student, Developer, Math Enthusiast',
    template: '%s | Samputhy Khim'
  },
  description: 'Samputhy Khim (Khim Samputhy) is a student from Cambodia interested in math, data science, and building tools that solve real problems. Gold medalist at SIMC, co-founder of PhishBlasters.',
  keywords: ['Samputhy Khim', 'Khim Samputhy', 'Cambodia', 'student', 'developer', 'math olympiad', 'data science', 'machine learning', 'PhishBlasters', 'CamData', 'CSLC', 'YMO Cambodia', 'cybersecurity education'],
  authors: [{ name: 'Samputhy Khim' }],
  creator: 'Samputhy Khim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://organi-cs.github.io',
    siteName: 'Samputhy Khim',
    title: 'Samputhy Khim — Student, Developer, Math Enthusiast',
    description: 'Student from Cambodia. Math, data science, and building things that solve real problems.',
    images: [
      {
        url: '/photo.png',
        width: 400,
        height: 400,
        alt: 'Samputhy Khim',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Samputhy Khim',
    description: 'Student from Cambodia. Math, data science, and building things.',
    images: ['/photo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://organi-cs.github.io" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="dot-bg" />
        {children}
      </body>
    </html>
  )
}