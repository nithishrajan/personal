import { Maximize2 } from 'lucide-react';

const photos = [
  { url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", title: "Paris Streets", aspect: "16/9" },
  { url: "https://images.unsplash.com/photo-1542224566-6eeaa792fb14?auto=format&fit=crop&q=80&w=800", title: "Kyoto Autumn", aspect: "4/3" },
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800", title: "Swiss Alps", aspect: "9/16" },
  { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", title: "Lake Bled", aspect: "1/1" },
  { url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", title: "London Tube", aspect: "4/3" },
  { url: "https://images.unsplash.com/photo-1449834909689-53e7a030be90?auto=format&fit=crop&q=80&w=800", title: "Night Market", aspect: "16/9" }
];

export default function Dump() {
  return (
    <div className="page-container" style={{ padding: '120px 5% 60px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          Photo <span className="gradient-text">Dump</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Moments captured from around the world. Mostly just me pretending to be a photographer.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem',
        gridAutoRows: '250px'
      }}>
        {photos.map((photo, i) => (
          <div key={i} style={{ 
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            gridRowEnd: photo.aspect === '9/16' ? 'span 2' : 'span 1',
            gridColumnEnd: photo.aspect === '16/9' ? 'span 2' : 'span 1'
          }}
          className="photo-card"
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('.photo-overlay').style.opacity = '1';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.photo-overlay').style.opacity = '0';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }} 
            />
            <div 
              className="photo-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem'
              }}
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>{photo.title}</span>
                <Maximize2 size={20} color="white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
