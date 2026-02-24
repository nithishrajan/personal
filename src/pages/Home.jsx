import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Nithish</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer & Creator
        </p>
        <p className="hero-description" style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          I build digital experiences, write about technology, and occasionally take photos. Welcome to my personal corner of the internet.
        </p>
        <div className="hero-actions">
          <Link to="/works" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
