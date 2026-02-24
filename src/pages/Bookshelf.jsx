import { Star } from 'lucide-react';

const books = [
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    rating: 5,
    cover: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&q=80&w=400",
    review: "An absolute cyberpunk masterpiece that predicted so much of the modern internet."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    rating: 4,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    review: "Incredibly insightful look into human biases, though a dense read."
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    rating: 5,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    review: "Fundamentally changed how I view product design and user interfaces."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    rating: 5,
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400",
    review: "The scale of worldbuilding here is unmatched."
  }
];

export default function Bookshelf() {
  return (
    <div className="page-container" style={{ padding: '120px 5% 60px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
          My <span className="gradient-text">Bookshelf</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          A curated list of books I've read, with entirely subjective ratings.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {books.map((book, i) => (
          <div key={i} style={{ 
            background: 'var(--surface-color)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '16px', 
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          className="book-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src={book.cover} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{book.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{book.author}</p>
              
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#fbbf24' }}>
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill={idx < book.rating ? "currentColor" : "none"} opacity={idx < book.rating ? 1 : 0.3} />
                ))}
              </div>
              
              <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.5 }}>"{book.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
