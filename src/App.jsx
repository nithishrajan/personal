import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Now from './pages/Now'
import Bookshelf from './pages/Bookshelf'
import Dump from './pages/Dump'
import Works from './pages/Works'
import Thoughts from './pages/Thoughts'

function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span className="gradient-text">Portfolio</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/now" className={`nav-item ${isActive('/now') ? 'active' : ''}`}>Now</Link>
        <Link to="/works" className={`nav-item ${isActive('/works') ? 'active' : ''}`}>Works</Link>
        <Link to="/thoughts" className={`nav-item ${isActive('/thoughts') ? 'active' : ''}`}>Thoughts</Link>
        <Link to="/bookshelf" className={`nav-item ${isActive('/bookshelf') ? 'active' : ''}`}>Bookshelf</Link>
        <Link to="/dump" className={`nav-item ${isActive('/dump') ? 'active' : ''}`}>Dump</Link>
      </nav>
    </header>
  );
}

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Router>
      <div className="ambient-bg" />
      <div className="app-container">
        <Navigation />
        <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/now" element={<Now />} />
            <Route path="/works" element={<Works />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/dump" element={<Dump />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
