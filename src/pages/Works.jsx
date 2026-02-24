import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Code Assistant",
    description: "A machine learning model that predicts your next line of code with 95% accuracy. Built using a custom transformer architecture and trained on millions of open source repositories.",
    tags: ["Python", "PyTorch", "React", "TypeScript"],
    github: "#",
    live: "#"
  },
  {
    title: "Distributed File System",
    description: "A fault-tolerant, decentralized file storage system written primarily in Rust. Implements custom consensus protocols to handle network partitions gracefully.",
    tags: ["Rust", "gRPC", "Docker", "Raft"],
    github: "#",
    live: null
  },
  {
    title: "Minimalist Note Taker",
    description: "An incredibly fast, offline-first notes application with markdown support. Synchronizes seamlessly across devices using CRDTs when connection is restored.",
    tags: ["React Native", "SQLite", "CRDT", "Zustand"],
    github: "#",
    live: "#"
  }
];

export default function Works() {
  return (
    <div className="page-container" style={{ padding: '120px 5% 60px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Selected <span className="gradient-text">Works</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Personal projects, research, and things I've built just for fun.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projects.map((project, i) => (
          <div key={i} style={{ 
            background: 'var(--surface-color)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '24px', 
            padding: '2.5rem',
            transition: 'transform 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Decorative gradient orb */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '300px',
              height: '300px',
              background: 'var(--accent-gradient)',
              filter: 'blur(100px)',
              opacity: 0.1,
              borderRadius: '50%',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{project.title}</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.github && (
                    <a href={project.github} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <Github size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'white'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '0.4rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.9rem',
                    color: 'var(--accent-1)',
                    border: '1px solid rgba(129, 140, 248, 0.2)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
