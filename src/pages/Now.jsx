import { MapPin, Briefcase, BookOpen, Coffee } from 'lucide-react';

export default function Now() {
  return (
    <div className="page-container" style={{ padding: '120px 5% 60px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>What I'm doing <span className="gradient-text">now</span></h1>
      
      <div className="now-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="now-card" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--accent-gradient)', padding: '0.75rem', borderRadius: '12px', color: 'white' }}>
              <MapPin size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Location</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Living in the San Francisco Bay Area, enjoying the fog and avoiding the traffic.</p>
        </div>

        <div className="now-card" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--accent-gradient)', padding: '0.75rem', borderRadius: '12px', color: 'white' }}>
              <Briefcase size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Work</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Building the future of developer tools. Focusing heavily on React, TypeScript, and AI integrations.</p>
        </div>

        <div className="now-card" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--accent-gradient)', padding: '0.75rem', borderRadius: '12px', color: 'white' }}>
              <BookOpen size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Learning</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Currently diving deep into Rust and WebAssembly, trying to understand systems programming better.</p>
        </div>
        
        <div className="now-card" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.3s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--accent-gradient)', padding: '0.75rem', borderRadius: '12px', color: 'white' }}>
              <Coffee size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Hobbies</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Perfecting my espresso dialing routine and attempting to bring dead film cameras back to life.</p>
        </div>
      </div>
    </div>
  );
}
