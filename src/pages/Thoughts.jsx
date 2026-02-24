import { Calendar } from 'lucide-react';

const essays = [
  {
    title: "The Illusion of Productivity",
    date: "Feb 20, 2026",
    excerpt: "Why spending three hours optimizing your dotfiles doesn't actually mean you got any real work done today.",
    readTime: "5 min read"
  },
  {
    title: "Design Systems in the Wild",
    date: "Jan 12, 2026",
    excerpt: "A look at how strict design constraints can paradoxically lead to more creative and consistent user experiences.",
    readTime: "8 min read"
  },
  {
    title: "Why I Stopped Using Frameworks (Mostly)",
    date: "Dec 05, 2025",
    excerpt: "The overhead of matching your mental model to a framework's architecture, and the joy of vanilla abstractions.",
    readTime: "12 min read"
  }
];

export default function Thoughts() {
  return (
    <div className="page-container" style={{ padding: '120px 5% 60px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Random <span className="gradient-text">Thoughts</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Long-form essays and short-form ramblings.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {essays.map((essay, i) => (
          <article key={i} style={{ 
            borderBottom: '1px solid var(--border-color)', 
            paddingBottom: '2.5rem',
            cursor: 'pointer'
          }}
          className="essay-card"
          onMouseEnter={(e) => e.currentTarget.querySelector('h2').style.color = 'var(--accent-1)'}
          onMouseLeave={(e) => e.currentTarget.querySelector('h2').style.color = 'var(--text-primary)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} />
                <span>{essay.date}</span>
              </div>
              <span>•</span>
              <span>{essay.readTime}</span>
            </div>
            
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', transition: 'color 0.2s' }}>
              {essay.title}
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              {essay.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
